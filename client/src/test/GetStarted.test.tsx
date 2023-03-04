import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GetStarted from "../Components/UI/GetStarted/GetStarted";

test("renders planet preserve h1", () => {
  // 1. Render component
  render(<GetStarted />);

  // 2. Get element that should exists in component from the screen
  const h1ElementPart1 = screen.getByText(/Get started with Planet/);
  const h1ElementPart2 = screen.getByText(/Preserve Login now/);

  // 3. Expect element to be in the document if exists test is passed
  expect(h1ElementPart1 && h1ElementPart2).toBeInTheDocument();
});
