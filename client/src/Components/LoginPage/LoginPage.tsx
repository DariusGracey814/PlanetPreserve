import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="border-8 border-indigo-600">
      <h1 className="mb-10">Login Page</h1>
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
        <div className="d-flex">
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

        <div className="d-flex">
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
  );
};

export default LoginPage;
