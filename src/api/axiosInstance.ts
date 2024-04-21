import axios from "axios";

const API_URL = process.env.REACT_APP_DRUGBIN_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    // Add any other headers or configurations you need
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here, e.g., handling pagination
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
