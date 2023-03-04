import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./Components/UI/Container/Container";
const LoginPage = React.lazy(() => import("./Components/LoginPage/LoginPage"));
const SignupPage = React.lazy(
  () => import("./Components/SignupPage/SignupPage")
);
import Header from "./Components/UI/Header/Header";

const App: React.FC = () => {
  return (
    <div>
      <main>
        {/* Application header */}
        <Header />
        <Routes>
          {/* Login Page */}
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />
          {/* Sign up Page */}
          <Route
            path="/signup"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignupPage />
              </Suspense>
            }
          />
        </Routes>
        {/* <Container></Container> */}
      </main>
    </div>
  );
};

export default App;
