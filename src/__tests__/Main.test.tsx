import { render, screen, cleanup } from "@testing-library/react";
import Main from "../components/Main";

afterEach(() => {
  cleanup();
});

test(" main component", () => {
  render(<Main />);
  const mainContainer = screen.getByTestId("main-container");
  expect(mainContainer).toBeInTheDocument();
});
