import api from "@/shared/api/client";
import { endpoints } from "@/shared/api/endpoints";
import { Platform, SignInRequest, TokenResponse, ResponseData } from "../types/auth";

export class AuthService {
  static async login(username: string, password: string) {
    const request: SignInRequest = {
      username,
      password,
      platform: Platform.WEB,
      deviceToken: "web_device",
      version: "1.0.0"
    };
    return api.post<ResponseData<TokenResponse>>(endpoints.auth.login, request);
  }

  static async register(email: string, password: string, name: string) {
    return api.post(endpoints.auth.register, { email, password, name });
  }

  static async forgotPassword(email: string) {
    return api.post("/auth/forgot-password", { email });
  }

  static async resetPassword(token: string, password: string) {
    return api.post("/auth/reset-password", { token, password });
  }
} 