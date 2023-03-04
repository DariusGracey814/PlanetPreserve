import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link className="btn nav-link text-white" to="/">
        Sign up
      </Link>
    </nav>
  );
};

export default Navigation;
