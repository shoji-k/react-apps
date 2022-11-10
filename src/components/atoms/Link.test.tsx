import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "./Link";

test("render Link", () => {
  render(<Link to="/sample">teeest</Link>, { wrapper: BrowserRouter });
  expect(screen.getByText("teeest")).toBeInTheDocument();
});
