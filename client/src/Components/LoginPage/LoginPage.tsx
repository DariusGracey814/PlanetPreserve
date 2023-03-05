import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import GetStarted from "../UI/GetStarted/GetStarted";

const LoginPage: React.FC = () => {
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
        {/* {validateError.map((error) => {
          return (
            <div
              key={validateError.indexOf(error)}
              className="text-white bg-red-100 text-center para"
            >
              {error}
            </div>
          );
        })} */}
        {/* Login Form */}
        <form method="post">
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
              // ref={usernameRef}
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
              // ref={passwordRef}
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
