export const studentEndpoints = {
  lookup: '/api/student-lookup',
} as const;

export type StudentEndpoints = typeof studentEndpoints; 