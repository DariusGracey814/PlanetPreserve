@jest-environment jsdom

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders planet preserve h1", () => {
  // 1. Render component
  render(<App />);

  // 2. Get element that should exists in component from the screen
  const h1Element = screen.getByText(/Planet Preserve/);

  // 3. Expect element to be in the document if exists test is passed
  expect(h1Element).toBeInTheDocument();
});

