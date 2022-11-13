import axios from "axios";
import client from "./client";

jest.mock("./client");
const mockedClient = client as jest.Mocked<typeof axios>;

test("fetch ip", async () => {
  const expected = { data: { origin: "192.0.2.0" } };
  mockedClient.get.mockResolvedValue(expected);

  const res = await client.get("http://httpbin.org/ip");
  expect(res).toEqual(expected);
});
