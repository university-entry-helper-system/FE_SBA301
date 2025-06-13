import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      await forgotPassword(email);
      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Gửi yêu cầu khôi phục mật khẩu thất bại. Vui lòng thử lại.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Quên mật khẩu
              </h2>
              <p className="text-gray-600">
                Nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="rounded-lg bg-red-50 p-4">
                  <div className="text-sm text-red-700">{error}</div>
                </div>
              )}
              {success && (
                <div className="rounded-lg bg-green-50 p-4">
                  <div className="text-sm text-green-700">
                    Đã gửi email khôi phục mật khẩu. Vui lòng kiểm tra hộp thư
                    đến.
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input w-full"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="text-sm">
                <Link
                  to="/login"
                  className="text-primary-600 hover:text-primary-700 hover:underline"
                >
                  Trở lại đăng nhập
                </Link>
              </div>

              <div>
                <button type="submit" className="btn btn-primary w-full">
                  Gửi liên kết đặt lại
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
