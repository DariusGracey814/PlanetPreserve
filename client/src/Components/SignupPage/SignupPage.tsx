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
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const SignupPage: React.FC = () => {
  const [errorTracker, setErrorTracker] = useState<number>(0);
  const [loadState, setLoadState] = useState<boolean>(false);

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
    // If user fields are valid
    if (validEmail && validPassword && validUsername) {
      // Set load state = true
      setLoadState(true);

      const registeredUser: {
        email: string;
        username: string;
        password: string;
      } = {
        email: enteredEmail,
        username: enteredUsername!,
        password: enteredPassword,
      };

      dispatch(sendUser(registeredUser))
        .then((response) => {
          dispatch(
            formDataActions.setSuccessMessage(
              "Registration successful. You can now login"
            )
          );
          console.log(response);
          // If success navigate to the login page
          setTimeout(() => {
            navigate("/planet-preserve/login");
            setLoadState(false);
          }, 1000);

          // reset valid fields on load
          dispatch(formDataActions.setValidEmail(false));
          dispatch(formDataActions.setValidUsername(false));
          dispatch(formDataActions.setValidPassword(false));
        })
        .catch((error) => error?.message);
    }
  }, [validEmail, validPassword, validUsername]);

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
        <form method="post" onSubmit={submitHandler} className="relative">
          {loadState ? <LoadingSpinner /> : null}

          {/* Username */}
          <div
            className={`relative flex flex-col ${
              loadState ? "input-blur" : ""
            }`}
          >
            <label htmlFor="InputUsername" className="form-label">
              Username
            </label>
            <FaUserAlt className="absolute form-icon" />
            <input
              type="text"
              id="InputUsername"
              className={`relative form-control border shadow-sm ${
                loadState ? "input-blur" : ""
              }`}
              aria-describedby="username"
              ref={usernameRef}
              readOnly={loadState ? true : false}
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
              readOnly={loadState ? true : false}
              required
            />
          </div>

          <div className="relative flex flex-col mb-1">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <AiFillLock className="absolute lock-icon lock-icon2" />
            <input
              type="password"
              className="form-control border shadow-sm"
              ref={passwordRef}
              readOnly={loadState ? true : false}
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
          <button
            type="submit"
            className="btn btn-form"
            disabled={loadState ? true : false}
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
