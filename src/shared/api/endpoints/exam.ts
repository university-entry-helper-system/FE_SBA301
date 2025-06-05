export const examEndpoints = {
  types: '/api/exam-types',
  categories: '/api/exam-categories',
  years: '/api/exam-years',
  results: '/api/exam-results',
} as const;

export type ExamEndpoints = typeof examEndpoints; 