import axios from "axios";
import client from "lib/client";
import { getIp } from "./httpbin";

jest.mock("lib/client");
const mockedClient = client as jest.Mocked<typeof axios>;

test("fetch ip", async () => {
  const expected = { data: { origin: "192.0.2.0" } };
  mockedClient.get.mockResolvedValue(expected);

  const res = await getIp();
  expect(res).toEqual(expected);
});
