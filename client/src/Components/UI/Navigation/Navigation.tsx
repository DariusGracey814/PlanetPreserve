import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formDataActions } from "../../../../store/forms";
import { RootState } from "../../../../store/store";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector(
    (state: RootState) => state.FormData.loginState
  );

  const toggleLogin = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(formDataActions.setLoginState());
    navigate(`${!loginState ? "/signup" : "/login"}`);
  };

  return (
    <nav className="flex justify-end">
      <button
        className="btn nav-link text-white"
        aria-label={`${!loginState ? "Sign Up button" : "Login button"}`}
        onClick={toggleLogin}
      >
        {!loginState ? "Sign up" : "Login"}
      </button>
    </nav>
  );
};

export default Navigation;
