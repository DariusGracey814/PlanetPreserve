import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "../../../store/forms";
import { RootState } from "../../../store/store";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import GetStarted from "../UI/GetStarted/GetStarted";

const SignupPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Form Refs
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  // Entered email and password stored in redux
  const enteredEmail = useSelector((state: RootState) => state.FormData.email);
  const enteredPassword = useSelector(
    (state: RootState) => state.FormData.password
  );
  const enteredUsername = useSelector(
    (state: RootState) => state.FormData.username
  );

  // Redux validate state
  const validateError = useSelector(
    (state: RootState) => state.FormData.errorMessage
  );

  // Errors array (map into)
  const errors: string[] = Array.from(validateError);

  // Submit Handler
  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();

    // Clear old errorMessages
    dispatch(formDataActions.setErrorMessage());

    // Set state with input values
    const userName = usernameRef.current!.value;
    const userEmail = emailRef.current!.value;
    const userPassword = passwordRef.current!.value;

    // Send to redux store for validation
    dispatch(formDataActions.setUsername(userName));
    dispatch(formDataActions.setEmail(userEmail));
    dispatch(formDataActions.setPassword(userPassword));
  };

  return (
    <section className="grid grid-2-cols">
      <div
        className="hero-bg"
        aria-label="nature green graphic background with gold tree leaves "
      ></div>
      <div>
        {/* Top Form Component */}
        <GetStarted />
        {/* Login form error message */}
        {validateError.map((error) => {
          return (
            <div
              key={validateError.indexOf(error)}
              className="text-red-500 para bg-red-100 text-center"
            >
              {error}
            </div>
          );
        })}
        {/* Login Form */}
        <form
          className="border-2 border-red-600"
          method="post"
          onSubmit={submitHandler}
        >
          {/* Username */}
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

          {/* Email Address */}
          <div className="relative flex flex-col">
            <label htmlFor="InputEmail" className="form-label">
              Email
            </label>
            <MdEmail className="absolute form-icon" />
            <input
              type="email"
              id="InputEmail"
              className="relative form-control border shadow-sm"
              aria-describedby="email"
              ref={emailRef}
              required
            />
          </div>

          <div className=" relative flex flex-col mb-3">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <AiFillLock className="absolute form-icon lock-icon" />
            <input
              type="password"
              className="form-control border shadow-sm"
              ref={passwordRef}
              required
            />
          </div>
          {/* Username and Password forgot links  */}
          <div>
            <p className="text-center">
              By clicking sign up you agree with the{" "}
              <span className="underline clr-main">terms and services</span>
            </p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-form">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
