export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '30000', 10)

export const API_ENDPOINTS = {
  examTypes: '/api/exam-types',
  examCategories: '/api/exam-categories',
  examYears: '/api/exam-years',
  studentLookup: '/api/student-lookup',
  examResults: '/api/exam-results',
} as const

export type ApiEndpoints = typeof API_ENDPOINTS 