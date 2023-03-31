import React from "react";

export const LoadingSpinnerFull: React.FC = () => {
  return (
    <div className="absolute container-full justify-center items-center">
      <div className="spinner"></div>
    </div>
  );
};

const LoadingSpinner: React.FC = () => {
  return (
    <div className="absolute container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
