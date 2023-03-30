import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Components/UI/Header/Header";
import Container from "./Components/UI/Container/Container";
import { RootState } from "../store/store";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";
const Dashboard = React.lazy(() => import("./Components/Dashboard/Dashboard"));

const App: React.FC = () => {
  // user authentication state
  const authenticated = useSelector(
    (state: RootState) => state.AuthSlice.authenticatedUser
  );

  return (
    <div>
      <main>
        {/* Application header */}
        <Header />
        <Routes>
          {/* Default Page route */}
          <Route path="/" element={<Navigate to="/planet-preserve/login" />} />
          {/* Login Page route*/}
          <Route path="/planet-preserve/login" element={<LoginPage />} />
          {/* Sign up Page route */}
          <Route path="/planet-preserve/signup" element={<SignupPage />} />

          {/* User Dashboard route */}
          <Route
            path={`${
              authenticated !== null && authenticated === true
                ? "/planet-preserve/dashboard/:username"
                : "/planet-preserve/login"
            }`}
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
