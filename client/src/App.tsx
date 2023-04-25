import * as React from "react";
import { Suspense, useState, useMemo, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Components/UI/Header/Header";
import Container from "./Components/UI/Container/Container";
import { LoadingSpinnerFull } from "./Components/LoadingSpinner/LoadingSpinner";
import { RootState } from "../store/store";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";
const Dashboard = React.lazy(() => import("./Components/Dashboard/Dashboard"));
const AddContribution = React.lazy(
  () => import("./Components/Dashboard/AddContribution/AddContribution")
);
const Contributions = React.lazy(
  () => import("./Components/Dashboard/Contributions/Contributions")
);

const App: React.FC = () => {
  const authenticated = useSelector(
    (state: RootState) => state.AuthSlice.authenticatedUser
  );

  const authUser: string = sessionStorage.getItem("authenticatedUser");

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
              authenticated || authUser === "true"
                ? "/planet-preserve/dashboard/:username"
                : ""
            }`}
            element={
              <Container>
                <Dashboard />
              </Container>
            }
          />

          {/* User Dashboard route */}
          <Route
            path={`${
              authenticated || authUser === "true"
                ? "/planet-preserve/:username/add-contribution"
                : ""
            }`}
            element={
              <Container>
                <Suspense fallback={<LoadingSpinnerFull />}>
                  <AddContribution />
                </Suspense>
              </Container>
            }
          />

          <Route
            path={`${
              authenticated || authUser === "true"
                ? "/planet-preserve/contributions"
                : ""
            }`}
            element={
              <Container>
                <Suspense fallback={<LoadingSpinnerFull />}>
                  <Contributions />
                </Suspense>
              </Container>
            }
          />

          {/* <Route
            path="/planet-preserve/contributions"
            element={<Contributions />}
          /> */}
          {/* 
          <Route path="*" element={<LoginPage />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
