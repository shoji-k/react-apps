import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import client from "../../lib/client";
import { Api } from "./Api";

jest.mock("../../lib/client");
const mockedClient = client as jest.Mocked<typeof axios>;

test("render Api", async () => {
  const expected = { data: { origin: "192.0.2.0" } };
  const promise = Promise.resolve(expected);
  mockedClient.get.mockImplementationOnce(() => promise);

  render(<Api />);

  await waitFor(() =>
    expect(screen.getByText("ip: 192.0.2.0")).toBeInTheDocument()
  );
});

test("render Api using spyOn", async () => {
  const expected = { data: { origin: "192.0.2.0" } };
  jest.spyOn(client, "get").mockResolvedValue(expected);

  render(<Api />);
  await waitFor(() =>
    expect(screen.getByText("ip: 192.0.2.0")).toBeInTheDocument()
  );
});
