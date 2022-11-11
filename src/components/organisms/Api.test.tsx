import { render, screen } from "@testing-library/react";
import { Api } from "./Api";

test("render Api", () => {
  render(<Api />);
  screen.debug()
  expect(screen.getByText("ip:")).toBeInTheDocument();
});
