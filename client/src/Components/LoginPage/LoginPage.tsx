import React, { useState, useEffect, useRef, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchUser } from "../../../api/LoginAuthApiService";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "../../../store/forms";
import { AuthSliceActions } from "../../../store/auth";
import { AppDispatch, RootState } from "../../../store/store";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import GetStarted from "../UI/GetStarted/GetStarted";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const LoginPage: React.FC = () => {
  // Form Input state
  const [errorTracker, setErrorTracker] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(0);
  const [loadState, setLoadState] = useState<boolean>(false);
  // Demo Account States
  const [demoUsername, setDemoUsername] = useState<string>("");
  const [demoPassword, setDemoPassword] = useState<string>("");

  // Form Refs
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const authenticated = useSelector(
    (state: RootState) => state.AuthSlice.authenticatedUser
  );

  // Entered email and password stored in redux
  const registeredUser = useSelector(
    (state: RootState) => state.FormData.successMessage
  );

  const enteredUsername = useSelector(
    (state: RootState) => state.FormData.username
  );

  const enteredPassword = useSelector(
    (state: RootState) => state.FormData.password
  );

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

  const clearError = useSelector(
    (state: RootState) => state.FormData.clearErrorMessage
  );

  // Clear error message on initial page load
  useEffect(() => {
    dispatch(formDataActions.setErrorMessage());
    dispatch(formDataActions.clearSetIsAuthenticated());
    dispatch(formDataActions.setValidEmail(false));
    setLoadState(false);
    setDemoUsername("");
    setDemoPassword("");
  }, []);

  // Clear error messages after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      dispatch(formDataActions.setErrorMessage());
      dispatch(formDataActions.clearSuccessMessage());
    }, 5000);
  }, [errorTracker, registeredUser]);

  // Fetches users
  useEffect(() => {
    if (validUsername && validPassword) {
      // Set Load state
      setLoadState(true);

      // User validated credentials
      const user: { username: string; password: string } = {
        username: enteredUsername,
        password: enteredPassword,
      };

      dispatch(fetchUser(user))
        .then((res) => {
          // send auth status to redux auth
          dispatch(AuthSliceActions.setAuthState(res.payload));
          setLoadState(false);
        })
        .catch((err) => {
          return err?.message;
        });
    }
  }, [formSubmit]);

  // Navigate to dashboard if user is authenicated
  useEffect(() => {
    if (authenticated) {
      setLoadState(false);
      // Set authenticated user in a session
      sessionStorage.setItem("authenticatedUser", `${authenticated}`);
      sessionStorage.setItem("username", `${enteredUsername}`);
    }

    // Get authenticated session
    const authUser: string = sessionStorage.getItem("authenticatedUser");
    const authUsername: string = sessionStorage.getItem("username");

    if (authUser === "true" && authUsername !== "") {
      navigate(`/planet-preserve/dashboard/${authUsername}`);
    }
  }, [authenticated]);

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
    setFormSubmit((prevState) => prevState + 1);
  };

  // demo Account
  const demoAccount = (evt: FormEvent) => {
    setDemoUsername("DemoUser");
    setDemoPassword("Demo1234");
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
        {/* Successful user registration */}
        {registeredUser !== "" ? (
          <div className="text-white bg-green-200 text-center para">
            {registeredUser}
          </div>
        ) : null}
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
        {/* Login form invalid user error */}
        {authenticated === false ? (
          <div className="text-white bg-red-200 text-center para">
            Error invalid username or password
          </div>
        ) : null}
        {}
        {/* Login Form */}
        <form method="post" onSubmit={submitHandler} className="relative">
          {loadState ? <LoadingSpinner /> : null}

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
              name="username"
              readOnly={loadState ? true : false}
              value={demoUsername !== "" ? demoUsername : null}
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
              readOnly={loadState ? true : false}
              value={demoPassword !== "" ? demoPassword : null}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-form"
            disabled={loadState ? true : false}
          >
            Login
          </button>

          <button
            type="button"
            className="btn btn-form2"
            disabled={loadState ? true : false}
            onClick={demoAccount}
          >
            Use Demo Account
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
