import axios from "axios";

export const endpoint = {
  dev: "http://localhost:5000/",
  live: "http://server.ikfashiondesigns.com/",
};
const BASE_URL = endpoint.live;

export const post = (url, data) => {
  return axios.post(BASE_URL + url, data);
};
