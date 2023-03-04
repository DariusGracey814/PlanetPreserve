import React from "react";

const GetStarted: React.FC = () => {
  return (
    <div>
      {/* Image  */}
      <img
        src={"../../../assets/tree-logo-apple.png"}
        alt="planet preserve logo"
        width="150px"
        height="150px"
      />
      {/* Heading */}
      <h1 className="form-h1 text-2xl">
        Get started with Planet\n Preserve Login now
      </h1>

      {/* Text */}
      <p>
        Track you contributions towards saving earth\n while seeing what people
        are doing all over.
      </p>
    </div>
  );
};

export default GetStarted;
