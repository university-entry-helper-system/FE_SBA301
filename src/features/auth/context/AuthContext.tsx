import { createContext, useContext, useState, ReactNode } from "react";
import api, { endpoints } from "@/lib/axios";
import { Platform, SignInRequest, TokenResponse, ResponseData } from "../types/auth";

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const request: SignInRequest = {
        username,
        password,
        platform: Platform.WEB,
        deviceToken: "web_device",
        version: "1.0.0"
      };

      const response = await api.post<ResponseData<TokenResponse>>(endpoints.auth.login, request);
      
      if (response?.data?.data) {
        const { accessToken, refreshToken, tokenType } = response.data.data;
        // Store the complete token with type
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("tokenType", tokenType || 'Bearer');
        
        // TODO: Fetch user profile and set user data
        setUser({
          id: "1", // This should come from user profile
          email: username,
          name: username,
        });
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      // Mở popup đăng nhập Google
      const width = 500;
      const height = 600;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;

      const popup = window.open(
        "/api/auth/google",
        "Google Login",
        `width=${width},height=${height},left=${left},top=${top}`
      );

      // Lắng nghe message từ popup
      const handleMessage = async (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;
        if (event.data.type === "GOOGLE_LOGIN_SUCCESS") {
          const { user, token } = event.data;
          setUser(user);
          localStorage.setItem("token", token);
          popup?.close();
          window.removeEventListener("message", handleMessage);
        }
      };

      window.addEventListener("message", handleMessage);
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await api.post(endpoints.auth.register, { email, password, name });

      if (response?.data) {
        const { accessToken } = response.data;
        setUser(response.data.user);
        localStorage.setItem("token", accessToken);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };

  const forgotPassword = async (email: string) => {
    try {
      // TODO: Implement API call
      await api.post("/auth/forgot-password", { email });
    } catch (error) {
      console.error("Forgot password error:", error);
      throw error;
    }
  };

  const resetPassword = async (token: string, password: string) => {
    try {
      await api.post("/auth/reset-password", { token, password });

    } catch (error) {
      console.error("Reset password error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        register,
        logout,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
