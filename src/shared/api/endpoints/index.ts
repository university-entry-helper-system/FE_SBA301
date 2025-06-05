import { authEndpoints, AuthEndpoints } from './auth';
import { userEndpoints, UserEndpoints } from './user';
import { examEndpoints, ExamEndpoints } from './exam';
import { studentEndpoints, StudentEndpoints } from './student';

export const endpoints = {
  auth: authEndpoints,
  user: userEndpoints,
  exam: examEndpoints,
  student: studentEndpoints,
} as const;

export type Endpoints = {
  auth: AuthEndpoints;
  user: UserEndpoints;
  exam: ExamEndpoints;
  student: StudentEndpoints;
};

export * from './auth';
export * from './user';
export * from './exam';
export * from './student'; 