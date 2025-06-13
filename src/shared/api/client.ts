import axios, { AxiosError } from "axios";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { endpoints } from "./endpoints";
import { API_BASE_URL, API_TIMEOUT } from "./config";

// Create axios instance with custom config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: API_TIMEOUT,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType") || "Bearer";
    if (token) {
      // Make sure we have both token type and token value
      if (!token.includes(".")) {
        console.error("Invalid token format");
        localStorage.removeItem("token");
        localStorage.removeItem("tokenType");
        window.location.href = "/login";
        return config;
      }
      config.headers.Authorization = `${tokenType} ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the token
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await api.post("/auth/refresh-token", {
          refreshToken,
        });

        const { accessToken, tokenType } = response.data.data;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("tokenType", tokenType);

        // Retry the original request with new token
        originalRequest.headers.Authorization = `${tokenType} ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh token fails, clear tokens and redirect
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("tokenType");
        window.location.href = "/login";
        return Promise.reject(
          new Error(
            refreshError instanceof Error
              ? refreshError.message
              : "Token refresh failed"
          )
        );
      }
    }

    return Promise.reject(
      error instanceof Error ? error : new Error("Request failed")
    );
  }
);

// Custom hook for using the API
export const useApi = () => {
  const { logout } = useAuth();

  const handleError = (error: AxiosError) => {
    if (error.response?.status === 401) {
      logout();
    }
    throw error;
  };

  return {
    get: async (url: string, config = {}) => {
      try {
        const response = await api.get(url, config);
        return response.data;
      } catch (error) {
        handleError(error as AxiosError);
      }
    },
    post: async (url: string, data = {}, config = {}) => {
      try {
        const response = await api.post(url, data, config);
        return response.data;
      } catch (error) {
        handleError(error as AxiosError);
      }
    },
    put: async (url: string, data = {}, config = {}) => {
      try {
        const response = await api.put(url, data, config);
        return response.data;
      } catch (error) {
        handleError(error as AxiosError);
      }
    },
    delete: async (url: string, config = {}) => {
      try {
        const response = await api.delete(url, config);
        return response.data;
      } catch (error) {
        handleError(error as AxiosError);
      }
    },
    api, // Expose the axios instance if needed
    endpoints,
  };
};

export default api;
