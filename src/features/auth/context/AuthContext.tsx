import { createContext, useState, ReactNode, useMemo } from "react";
import { AuthService } from "../services/authService";

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: string;
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

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  readonly children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const response = await AuthService.login(username, password);

      if (response?.data?.data) {
        const { accessToken, refreshToken, tokenType } = response.data.data;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("tokenType", tokenType || "Bearer");

        // TODO: Fetch user profile and set user data
        setUser({
          id: "1", // This should come from user profile
          email: username,
          name: username,
          role: "user", // Default role, should come from API
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
      const width = 500;
      const height = 600;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;

      const popup = window.open(
        "/api/auth/google",
        "Google Login",
        `width=${width},height=${height},left=${left},top=${top}`
      );

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
      const response = await AuthService.register(email, password, name);
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
      await AuthService.forgotPassword(email);
    } catch (error) {
      console.error("Forgot password error:", error);
      throw error;
    }
  };

  const resetPassword = async (token: string, password: string) => {
    try {
      await AuthService.resetPassword(token, password);
    } catch (error) {
      console.error("Reset password error:", error);
      throw error;
    }
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      loginWithGoogle,
      register,
      logout,
      forgotPassword,
      resetPassword,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
