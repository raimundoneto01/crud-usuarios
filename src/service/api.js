import axios from "axios";

const api = axios.create({
  baseURL: "https://64e7ab01b0fd9648b7903ce3.mockapi.io",
});

export default api;
