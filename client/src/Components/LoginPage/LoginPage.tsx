import React from "react";
import { Link } from "react-router-dom";
import GetStarted from "../UI/GetStarted/GetStarted";

const LoginPage: React.FC = () => {
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
          <div className="flex flex-col">
            <label htmlFor="InputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="InputUsername"
              className="form-control border shadow-sm"
              aria-describedby="username"
              // ref={usernameRef}
              required
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border shadow-sm"
              // ref={passwordRef}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-form">
            Submit
          </button>

          {/* Username and Password forgot links  */}
          <div className="flex justify-between mt-5 underline">
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
