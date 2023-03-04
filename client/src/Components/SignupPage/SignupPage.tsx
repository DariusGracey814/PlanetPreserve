import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import GetStarted from "../UI/GetStarted/GetStarted";

const SignupPage: React.FC = () => {
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
        {/* {validateError.map((error) => {
        return (
          <div key={validateError.indexOf(error)} className="text-red-500 para">
            {error}
          </div>
        );
      })} */}
        {/* Login Form */}
        <form method="post">
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
              // ref={usernameRef}
              required
            />
          </div>

          {/* Email Address */}
          <div className="relative flex flex-col">
            <label htmlFor="InputEmail" className="form-label">
              Username
            </label>
            <MdEmail className="absolute form-icon" />
            <input
              type="text"
              id="InputEmail"
              className="relative form-control border shadow-sm"
              aria-describedby="email"
              // ref={usernameRef}
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
              // ref={passwordRef}
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
