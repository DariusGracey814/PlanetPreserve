import React from "react";
import GetStarted from "../UI/GetStarted/GetStarted";

const LoginPage: React.FC = () => {
  return (
    <section className="grid grid-2-cols">
      <div
        className="hero-bg border-4 border-green-600"
        aria-label="nature green graphic background with gold tree leaves "
      ></div>
      <div className="border-4 border-indigo-600">
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
              className="form-control border"
              aria-describedby="username"
              // ref={usernameRef}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border"
              // ref={passwordRef}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-form">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
