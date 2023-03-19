import React, { FormEvent, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formDataActions } from "../../../../store/forms";
import { RootState } from "../../../../store/store";

const Navigation: React.FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(true);

  console.log(toggleNav);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setToggleNav(true);
  }, []);

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
      <Link
        to={toggleNav ? "/login" : "/signup"}
        className="btn nav-link text-white"
      >
        <button onClick={toggleLogin}>Signup</button>
      </Link>
      {/* <button
        aria-label={`${toggleNav ? "Login button" : "Sign Up button"}`}
        onClick={toggleLogin}
      >
        {toggleNav ? "Login" : }
      </button> */}
    </nav>
  );
};

export default Navigation;
