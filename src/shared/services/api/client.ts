import axios from 'axios'
import { API_BASE_URL, API_TIMEOUT } from '@/config/api'

// Create axios instance with default configuration
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor to handle authentication
apiClient.interceptors.request.use(
  (config) => {
    // Get authentication token from localStorage
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY)
    // If token exists, add it to request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add response interceptor to handle errors and token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      // Try to refresh token if available
      const refreshToken = localStorage.getItem(import.meta.env.VITE_REFRESH_TOKEN_KEY)
      if (refreshToken) {
        try {
          // TODO: Implement token refresh logic
          // Example implementation:
          // const { data } = await axios.post('/api/refresh-token', { refreshToken })
          // localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN_KEY, data.token)
          // return apiClient(error.config)
        } catch (refreshError) {
          // If refresh fails, clear tokens and redirect to login
          localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN_KEY)
          localStorage.removeItem(import.meta.env.VITE_REFRESH_TOKEN_KEY)
          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  }
) 