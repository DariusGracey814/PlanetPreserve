import * as React from "react";
import { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = (props) => {
  return <div className="main-container">{props.children}</div>;
};

export default Container;
