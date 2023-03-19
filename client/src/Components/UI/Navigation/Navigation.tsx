import React, { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formDataActions } from "../../../../store/forms";
import { RootState } from "../../../../store/store";

const Navigation: React.FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  console.log(toggleNav);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(toggleNav ? "/login" : "/signup");
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
        aria-label={`${toggleNav ? "Login button" : "Sign Up button"}`}
        onClick={toggleLogin}
      >
        {toggleNav ? "Login" : "Signup"}
      </button>
    </nav>
  );
};

export default Navigation;
