/**
 * @jest-environment jsdom
 */
import * as React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SignupPage from "../Components/SignupPage/SignupPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

test("returns username and password input label", () => {
  render(
    <Provider store={store}>
      <Router>
        <SignupPage />
      </Router>
    </Provider>
  );

  const usernameLabel = screen.getByText(/Username/);
  const passwordLabel = screen.getByText(/Password/);

  expect(usernameLabel && passwordLabel).toBeInTheDocument();
});
