export enum Platform {
  WEB = 'web',
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP'
}

export interface SignInRequest {
  username: string;
  password: string;
  platform: Platform;
  deviceToken?: string;
  version?: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface ResponseData<T> {
  status: number;
  message: string;
  data: T;
}

export interface ResponseError {
  status: number;
  message: string;
} 