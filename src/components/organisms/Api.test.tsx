import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { Api } from "./Api";

jest.mock("axios");

test("render Api", async () => {
  const expected = { data: { origin: "192.0.0.1" } };
  const promise = Promise.resolve(expected);
  (axios.get as any).mockImplementationOnce(() => promise);

  render(<Api />);

  await waitFor(() =>
    expect(screen.getByText("ip: 192.0.0.1")).toBeInTheDocument()
  );
});

test("render Api using spyOn", async () => {
  const expected = { data: { origin: "192.0.0.1" } };
  jest.spyOn(axios, 'get').mockResolvedValue(expected);

  render(<Api />);
  await waitFor(() =>
    expect(screen.getByText("ip: 192.0.0.1")).toBeInTheDocument()
  );
});
