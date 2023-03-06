import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import logo from "../../../assets/tree-logo-apple.png";

const GetStarted: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image  */}
      <img
        className="hero-img mt-5"
        src={logo}
        alt="planet preserve logo"
        width="130px"
        height="130px"
      />
      {/* Heading */}
      <h1 className="hero-heading form-h1 text-3xl mb-2">
        Get started with Planet Preserve Login now
      </h1>

      {/* Text */}
      <p className="hero-para text-sm">
        Track you contributions towards saving earth while seeing what people
        are doing all over.
      </p>
    </div>
  );
};

export default GetStarted;
