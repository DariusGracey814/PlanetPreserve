import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const GetStarted: React.FC = () => {
  const loginState = useSelector(
    (state: RootState) => state.FormData.loginState
  );

  return (
    <div className="flex flex-col items-center text-center">
      {/* Image  */}
      <div
        id="tree-logo"
        className={`hero-img ${!loginState ? "mt-5" : ""}`}
        aria-label="planet preserve logo"
      ></div>
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
