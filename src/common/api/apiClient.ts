import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://tcas-assets.skooldio.com/tmp",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Unauthorized, redirecting to login...");
          break;
        case 403:
          console.error("Forbidden");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error("Error:", error.response.data.message || error.message);
      }
    } else {
      console.error("Network error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
