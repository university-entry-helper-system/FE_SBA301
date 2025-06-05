/**
 * API Configuration
 * Contains global configuration values for the API client
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '30000', 10)

// For backward compatibility
export { endpoints as API_ENDPOINTS } from './endpoints/index';
export type { Endpoints as ApiEndpoints } from './endpoints/index';