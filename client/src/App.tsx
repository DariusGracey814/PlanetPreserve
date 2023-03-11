import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/UI/Header/Header";
import Container from "./Components/UI/Container/Container";
const LoginPage = React.lazy(() => import("./Components/LoginPage/LoginPage"));
const SignupPage = React.lazy(
  () => import("./Components/SignupPage/SignupPage")
);
const Dashboard = React.lazy(() => import("./Components/Dashboard/Dashboard"));

const App: React.FC = () => {
  return (
    <div>
      <main>
        {/* Application header */}
        {/* <Header /> */}
        <Routes>
          {/* Default Page route */}
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />
          {/* Login Page route*/}
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />
          {/* Sign up Page route */}
          <Route
            path="/signup"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignupPage />
              </Suspense>
            }
          />

          {/* User Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Container>
                  <Dashboard />
                </Container>
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
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
