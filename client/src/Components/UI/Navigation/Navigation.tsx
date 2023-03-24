import React, { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formDataActions } from "../../../../store/forms";
import { RootState } from "../../../../store/store";

const Navigation: React.FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const dispatch = useDispatch();
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
