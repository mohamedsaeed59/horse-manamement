import axios from "axios";
import { getToken } from "../utils/authUtils";

const API_BASE = "https://noonacademy_ancozle.jeyad360.com/organization/v1/d";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// set Authorization dynamically on every request
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;