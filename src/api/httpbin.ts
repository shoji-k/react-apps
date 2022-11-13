import axios from "axios";

export const getIp = () => {
  return axios.get("http://httpbin.org/ip");
};
