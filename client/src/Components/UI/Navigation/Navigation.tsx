import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formDataActions } from "../../../../store/forms";
import { RootState } from "../../../../store/store";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enteredUsername = useSelector(
    (state: RootState) => state.FormData.username
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.FormData.isAuthenticated
  );

  const loginState = useSelector(
    (state: RootState) => state.FormData.loginState
  );

  const togglePage = (): void => {
    dispatch(formDataActions.setLoginState());
    navigate(`${!loginState ? "signup" : "login"}`);
  };

  return (
    <nav className="flex justify-end">
      <Link className="btn nav-link text-white" to="/">
        <button onClick={togglePage}> Sign up</button>
      </Link>
    </nav>
  );
};

export default Navigation;
