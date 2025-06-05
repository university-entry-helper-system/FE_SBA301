export const userEndpoints = {
  profile: '/user/profile',
  updateProfile: '/user/profile',
} as const;

export type UserEndpoints = typeof userEndpoints; 