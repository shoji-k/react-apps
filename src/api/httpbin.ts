import client from "lib/client";

export const getIp = () => {
  return client.get("http://httpbin.org/ip");
};
