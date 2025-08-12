import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:8081/api/v1.0", // Base URL with context-path
});

// Attach JWT token (if exists) in every request
authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default authApi;
