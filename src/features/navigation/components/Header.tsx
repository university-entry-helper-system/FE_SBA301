import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../auth/context/AuthContext";

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user, logout } = useAuth();

  const moreMenuItems = [
    "Tư vấn chọn trường",
    "Điểm chuẩn vào 10",
    "Quy đổi điểm IELTS",
    "Cách tính điểm xét tuyển ĐH",
    "Quy đổi điểm BGNL, ĐGTD",
    "Điểm ưu tiên, điểm khuyến khích",
    "Mã Trường - Mã ngành ĐH",
    "Danh sách trúng tuyển",
    "Công cụ tính điểm tốt nghiệp THPT",
    "Tra cứu xếp hạng thi",
    "Điểm thi vào 10",
    "Điểm thi tốt nghiệp THPT",
    "Đếm ngược",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary-600">EDUPATH</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/exam-lookup"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Tra cứu đề án
            </Link>
            <Link
              to="/results"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Kết quả
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <span>Xem thêm</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showDropdown ? "rotate-180" : ""
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

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20 max-h-[80vh] overflow-y-auto">
                  {moreMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      // TODO: Update paths for these links
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 my-1"></div>
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                        Xin chào, {user?.name}
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setShowDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        Đăng xuất
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        onClick={() => setShowDropdown(false)}
                      >
                        Đăng nhập
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        onClick={() => setShowDropdown(false)}
                      >
                        Đăng ký
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
