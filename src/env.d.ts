/// <reference types="vite/client" />

// Define types for environment variables
interface ImportMetaEnv {
  // API Configuration
  readonly VITE_API_BASE_URL: string    // Base URL for API requests
  readonly VITE_API_TIMEOUT: string     // API request timeout in milliseconds

  // Application Configuration
  readonly VITE_APP_NAME: string        // Application name
  readonly VITE_APP_ENV: string         // Environment (development/production)

  // Authentication Configuration
  readonly VITE_AUTH_TOKEN_KEY: string  // LocalStorage key for auth token
  readonly VITE_REFRESH_TOKEN_KEY: string // LocalStorage key for refresh token
}

// Extend ImportMeta interface for TypeScript
interface ImportMeta {
  readonly env: ImportMetaEnv
} 