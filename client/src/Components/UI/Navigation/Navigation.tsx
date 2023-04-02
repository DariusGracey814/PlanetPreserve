import React, { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(toggleNav ? "/planet-preserve/signup" : "/planet-preserve/login");
  }, [toggleNav]);

  const toggleLogin = (evt: FormEvent) => {
    evt.preventDefault();

    // Toggle login menu
    setToggleNav((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-end">
      <button
        className="btn nav-link text-white"
        aria-label={`${!toggleNav ? "Sign Up button" : "Login button"}`}
        onClick={toggleLogin}
      >
        {!toggleNav ? "Signup" : "Login"}
      </button>
    </nav>
  );
};

export default Navigation;
