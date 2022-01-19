import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)

import App from "./App";
test("should be in the document", () => {
  render(<App />);
  const text = screen.getByText("See all");
  // Events and assertions...
  expect(text).toBeInTheDocument();
});
