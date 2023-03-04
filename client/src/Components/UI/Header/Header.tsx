import React from "react";
import Navigation from "../Navigation/Navigation";

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 py-5 px-5">
      <Navigation />
    </header>
  );
};

export default Header;
