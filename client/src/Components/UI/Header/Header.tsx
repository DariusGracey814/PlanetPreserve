import * as React from "react";
import Navigation from "../Navigation/Navigation";

const Header: React.FC = () => {
  const authUser = sessionStorage.getItem("authenticatedUser");

  return (
    <header className="header w-full absolute top-0 left-0 justify-end py-5 px-5">
      {/* Display main nav if user is not authenticated */}
      {authUser === "true" ? null : <Navigation />}
    </header>
  );
};

export default Header;
