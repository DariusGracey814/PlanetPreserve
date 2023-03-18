import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "../../../store/forms";
import { sendUser } from "../../../api/SignupAuthApiService";
import { AppDispatch, RootState } from "../../../store/store";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import GetStarted from "../UI/GetStarted/GetStarted";

const SignupPage: React.FC = () => {
  const [res, setRes] = useState<string>(
    "Waiting to send registering user to server"
  );
  const [errorTracker, setErrorTracker] = useState<number>(0);
  const [btnClick, setBtnClick] = useState<number>(0);

  // Form Refs
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // Entered email and password stored in redux
  const enteredEmail = useSelector((state: RootState) => state.FormData.email);
  const enteredPassword = useSelector(
    (state: RootState) => state.FormData.password
  );
  const enteredUsername = useSelector(
    (state: RootState) => state.FormData.username
  );

  console.log(enteredEmail);
  console.log(enteredUsername);
  console.log(enteredPassword);

  const validEmail = useSelector(
    (state: RootState) => state.FormData.validEmail
  );
  const validUsername = useSelector(
    (state: RootState) => state.FormData.validUsername
  );
  const validPassword = useSelector(
    (state: RootState) => state.FormData.validPassword
  );

  // Redux validate state
  const validateError = useSelector(
    (state: RootState) => state.FormData.errorMessage
  );

  // Errors array (map into)
  const errors: string[] = Array.from(validateError);

  console.log(res);

  // Clear error message on initial page load
  useEffect(() => {
    dispatch(formDataActions.setErrorMessage());
  }, []);

  // Clear error messages after 3 seconds
  useEffect(() => {
    console.log(errorTracker);
    setTimeout(() => {
      dispatch(formDataActions.setErrorMessage());
    }, 5000);
  }, [errorTracker]);

  // Send registering user credentials to backend
  useEffect(() => {
    const registeredUser: {
      email: string;
      username: string;
      password: string;
    } = {
      email: enteredEmail,
      username: enteredUsername,
      password: enteredPassword,
    };

    // If user fields are valid
    if (validEmail && validPassword && validUsername) {
      dispatch(sendUser(registeredUser))
        .then((response) => {
          if (response) {
            console.log(response);
            setRes("User successfully sent to the server");
            // If success navigate to the login page
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }
        })
        .catch((error) => error?.message);
    } else {
      setRes("Credentials are invalid");
    }
  }, [btnClick]);

  // Submit Handler
  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();

    // Set state with input values
    const userName = usernameRef.current!.value;
    const userEmail = emailRef.current!.value;
    const userPassword = passwordRef.current!.value;

    // Send to redux store for validation
    dispatch(formDataActions.setUsername(userName));
    dispatch(formDataActions.setEmail(userEmail));
    dispatch(formDataActions.setPassword(userPassword));

    setErrorTracker((prevState) => prevState + 1);
    setBtnClick((prevClick) => prevClick + 1);
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
              className="para bg-red-200 text-center"
            >
              {error}
            </div>
          );
        })}
        {/* Login Form */}
        <form method="post" onSubmit={submitHandler}>
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
            <MdEmail className="absolute form-icon email-icon" />
            <input
              type="email"
              id="InputEmail"
              className="relative form-control border shadow-sm"
              aria-describedby="email"
              ref={emailRef}
              required
            />
          </div>

          <div className=" relative flex flex-col mb-1">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <AiFillLock className="absolute lock-icon lock-icon2" />
            <input
              type="password"
              className="form-control border shadow-sm"
              ref={passwordRef}
              required
            />
          </div>
          {/* Username and Password forgot links  */}
          <div>
            <p className="text-center text-sm">
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
