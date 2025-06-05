export const authEndpoints = {
  login: '/auth/access-token',
  register: '/auth/register',
  refreshToken: '/auth/refresh-token',
  logout: '/auth/logout',
} as const;

export type AuthEndpoints = typeof authEndpoints; 