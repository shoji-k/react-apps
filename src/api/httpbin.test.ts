import axios from "axios";
import { getIp } from "./httpbin";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("fetch ip", async () => {
  const expected = { data: { ip: "192.0.0.1" } };
  mockedAxios.get.mockResolvedValue(expected);

  const res = await getIp();
  expect(res).toEqual(expected);
});
