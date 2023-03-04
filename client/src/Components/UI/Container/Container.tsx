import React, { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export default Container;
