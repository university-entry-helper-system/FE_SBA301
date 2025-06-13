import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(username, password);
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Tên đăng nhập hoặc mật khẩu không đúng");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Đăng nhập bằng Google thất bại");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm bg-opacity-90 border border-gray-100">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                Đăng nhập
              </h2>
              <p className="text-sm text-gray-600">
                Đăng nhập để truy cập vào tài khoản của bạn
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="rounded-lg bg-red-50 p-3 sm:p-4 border border-red-100 animate-fade-in">
                  <div className="text-xs sm:text-sm text-red-700 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email hoặc tên đăng nhập
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors duration-200"
                  placeholder="Nhập email hoặc tên đăng nhập của bạn"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mật khẩu
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors duration-200"
                  placeholder="Nhập mật khẩu của bạn"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="text-primary-600 hover:text-primary-700 hover:underline transition-colors duration-200"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="text-sm">
                  <Link
                    to="/register"
                    className="text-primary-600 hover:text-primary-700 hover:underline transition-colors duration-200"
                  >
                    Chưa có tài khoản? Đăng ký
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg px-4 py-2 sm:py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Đăng nhập
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Hoặc</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full inline-flex items-center justify-center rounded-lg px-4 py-2 sm:py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] space-x-2"
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span>Đăng nhập bằng Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
