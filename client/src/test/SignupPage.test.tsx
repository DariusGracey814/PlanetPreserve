import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignupPage from "../Components/SignupPage/SignupPage";

test("returns username and password input label", () => {
  render(<SignupPage />);

  const usernameLabel = screen.getByText(/Username/);
  const passwordLabel = screen.getByText(/Password/);

  expect(usernameLabel && passwordLabel).toBeInTheDocument();
});
