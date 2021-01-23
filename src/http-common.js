import axios from "axios";
import { API } from "./backend";

export default axios.create({
  baseURL: API,
  headers: {
    "Content-type": "application/json",
  },
});
