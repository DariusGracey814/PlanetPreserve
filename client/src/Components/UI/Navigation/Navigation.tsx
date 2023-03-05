import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-end">
      <button className="btn nav-link text-white">Sign up</button>
    </nav>
  );
};

export default Navigation;
