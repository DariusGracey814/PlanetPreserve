const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode;
process.env.NODE_ENV === "production"
  ? (mode = "production")
  : (mode = "development");

module.exports = {
  mode: mode,
  entry: {
    bundle: path.resolve(__dirname, "src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][hash][ext]",
    publicPath: "/",
  },

  // Dev server
  target: "web",
  devtool: "source-map",
  devServer: {
    port: "3000",
    static: "dist",
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.s?css/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", "jsx", ".js", ".json"],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Planet Preserve Play Your Part",
      filename: "index.html",
      template: "src/index.html",
      favicon: "./src/assets/tree-logo-apple.png",
    }),
    new Dotenv({
      path: path.resolve(__dirname, "..", ".env"),
    }),
  ],
};
