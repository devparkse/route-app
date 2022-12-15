import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000",
  params: {
    api_key: 5000,
    a: "hello",
  },
});
export default instance;
