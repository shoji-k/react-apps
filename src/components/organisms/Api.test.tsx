import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { Api } from "./Api";

jest.mock("axios");

test("render Api", async () => {
  const promise = Promise.resolve({ data: { origin: "192.0.0.1" } });
  (axios.get as any).mockImplementationOnce(() => promise);

  render(<Api />);
  await waitFor(() =>
    expect(screen.getByText("ip: 192.0.0.1")).toBeInTheDocument()
  );
});
