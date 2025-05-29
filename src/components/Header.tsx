import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/context/AuthContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Quiz App
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              to="/exam-lookup"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Tra cứu bài thi
            </Link>
            <Link
              to="/results"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Kết quả
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-600 hover:text-primary-600 transition-colors flex items-center"
              >
                Xem thêm
                <svg
                  className={`ml-1 h-5 w-5 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 max-h-[80vh] overflow-y-auto">
                  <Link
                    to="/school-advice"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Tư vấn chọn trường
                  </Link>
                  <Link
                    to="/grade-10"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Điểm chuẩn vào 10
                  </Link>
                  <Link
                    to="/ielts-conversion"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Quy đổi điểm IELTS
                  </Link>
                  <Link
                    to="/university-points"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Cách tính điểm xét tuyển ĐH
                  </Link>
                  <Link
                    to="/point-conversion"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Quy đổi điểm BGNL, ĐGTD
                  </Link>
                  <Link
                    to="/bonus-points"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Điểm ưu tiên, điểm khuyến khích
                  </Link>
                  <Link
                    to="/school-majors"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Mã Trường - Mã ngành ĐH
                  </Link>
                  <Link
                    to="/admission-list"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Danh sách trúng tuyển
                  </Link>
                  <Link
                    to="/graduation-calculator"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Công cụ tính điểm tốt nghiệp THPT
                  </Link>
                  <Link
                    to="/exam-ranking"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Tra cứu xếp hạng thi
                  </Link>
                  <Link
                    to="/grade-10-results"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Điểm thi vào 10
                  </Link>
                  <Link
                    to="/graduation-results"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Điểm thi tốt nghiệp THPT
                  </Link>
                  <Link
                    to="/countdown"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Đếm ngược
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  {!isAuthenticated ? (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Đăng nhập
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Đăng ký
                      </Link>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đăng xuất
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-primary-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/exam-lookup"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tra cứu bài thi
            </Link>
            <Link
              to="/results"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kết quả
            </Link>
            <Link
              to="/school-advice"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tư vấn chọn trường
            </Link>
            <Link
              to="/grade-10"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Điểm chuẩn vào 10
            </Link>
            <Link
              to="/ielts-conversion"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quy đổi điểm IELTS
            </Link>
            <Link
              to="/university-points"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cách tính điểm xét tuyển ĐH
            </Link>
            <Link
              to="/point-conversion"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quy đổi điểm BGNL, ĐGTD
            </Link>
            <Link
              to="/bonus-points"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Điểm ưu tiên, điểm khuyến khích
            </Link>
            <Link
              to="/school-majors"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mã Trường - Mã ngành ĐH
            </Link>
            <Link
              to="/admission-list"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Danh sách trúng tuyển
            </Link>
            <Link
              to="/graduation-calculator"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Công cụ tính điểm tốt nghiệp THPT
            </Link>
            <Link
              to="/exam-ranking"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tra cứu xếp hạng thi
            </Link>
            <Link
              to="/grade-10-results"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Điểm thi vào 10
            </Link>
            <Link
              to="/graduation-results"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Điểm thi tốt nghiệp THPT
            </Link>
            <Link
              to="/countdown"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Đếm ngược
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="block text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="block text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng ký
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-600 hover:text-primary-600 transition-colors"
              >
                Đăng xuất
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
