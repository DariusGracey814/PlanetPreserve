import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import logo from "../../../asset/tree-logo-apple.png";

const GetStarted: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image  */}
      <img
        className="mt-5"
        src={logo}
        alt="planet preserve logo"
        width="130px"
        height="130px"
      />
      {/* Heading */}
      <h1 className="form-h1 text-3xl mb-2">
        Get started with Planet{" "}
        <span className="content2">Preserve Login now</span>
      </h1>

      {/* Text */}
      <p>
        Track you contributions towards saving earth
        <span className="content2">
          while seeing what people are doing all over.
        </span>
      </p>
    </div>
  );
};

export default GetStarted;
