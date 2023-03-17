import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "../../../store/forms";
import { RootState } from "../../../store/store";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import GetStarted from "../UI/GetStarted/GetStarted";

const LoginPage: React.FC = () => {
  // Form Input state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorTracker, setErrorTracker] = useState<number>(0);

  // Form Refs
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Entered email and password stored in redux
  const enteredUsername = useSelector(
    (state: RootState) => state.FormData.username
  );

  const enteredPassword = useSelector(
    (state: RootState) => state.FormData.password
  );

  console.log(enteredUsername, enteredPassword);

  // Valid email and password redux state
  const validUsername = useSelector(
    (state: RootState) => state.FormData.validUsername
  );
  const validPassword = useSelector(
    (state: RootState) => state.FormData.validPassword
  );

  // Redux validate errors
  const validateError = useSelector(
    (state: RootState) => state.FormData.errorMessage
  );

  console.log(validateError);

  const clearError = useSelector(
    (state: RootState) => state.FormData.clearErrorMessage
  );

  // Clear error message on initial page load
  useEffect(() => {
    dispatch(formDataActions.setErrorMessage());
    dispatch(formDataActions.clearSetIsAuthenticated());
  }, []);

  // Clear error messages after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      dispatch(formDataActions.setErrorMessage());
    }, 5000);
  }, [errorTracker]);

  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();

    // Set state with input values
    const username = usernameRef.current!.value;
    const userPassword = passwordRef.current!.value;

    // Send to redux store for validation
    dispatch(formDataActions.setUsername(username));
    dispatch(formDataActions.setPassword(userPassword));

    // Start timer clearing error messages
    setErrorTracker((prevState) => prevState + 1);
  };

  return (
    <section className="hero grid grid-2-cols">
      <div
        className="hero-bg"
        aria-label="nature green graphic background with gold tree leaves "
      ></div>
      <div className="form-hero">
        {/* Top Form Component */}
        <GetStarted />
        {/* Login form error message */}
        {validateError.map((error) => {
          return (
            <div
              key={validateError.indexOf(error)}
              className="text-white bg-red-200 text-center para"
            >
              {error}
            </div>
          );
        })}
        {/* Login Form */}
        <form method="post" onSubmit={submitHandler}>
          <div className="relative flex flex-col">
            <label htmlFor="InputUsername" className="form-label">
              Username
            </label>
            <FaUserAlt className="absolute form-icon" />
            <input
              type="text"
              id="InputUsername"
              className="relative form-control border shadow-sm"
              aria-describedby="username"
              ref={usernameRef}
              required
            />
          </div>

          <div className="relative flex flex-col mb-5">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <AiFillLock className="absolute lock-icon" />
            <input
              type="password"
              className="form-control border shadow-sm"
              ref={passwordRef}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-form">
            Login
          </button>

          {/* Username and Password forgot links  */}
          <div className="flex justify-between mt-5 underline text-sm">
            <p>
              <Link to="/">Forgot Username</Link>
            </p>
            <p>
              <Link to="/s">Forgot Password</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
