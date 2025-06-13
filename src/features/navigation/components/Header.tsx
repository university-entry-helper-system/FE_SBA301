import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user, logout } = useAuth();

  const moreMenuItems = [
    "Tư vấn chọn trường",
    "Quy đổi điểm IELTS",
    "Cách tính điểm xét tuyển ĐH",
    "Quy đổi điểm BGNL, ĐGTD",
    "Điểm ưu tiên, điểm khuyến khích",
    "Mã Trường - Mã ngành ĐH",
    "Danh sách trúng tuyển",
    "Công cụ tính điểm tốt nghiệp THPT",
    "Tra cứu xếp hạng thi",
    "Điểm thi tốt nghiệp THPT",
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

          <div className="flex-1 flex items-center justify-center space-x-6">
            <Link
              to="/de-an-tuyen-sinh"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Đề án tuyển sinh
            </Link>
            <Link
              to="/cac-nganh-dao-tao"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Các ngành đào tạo
            </Link>
            <Link
              to="/tinh-diem-hoc-ba"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Tính điểm xét học bạ THPT
            </Link>
            <Link
              to="/diem-chuan"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Điểm chuẩn đại học
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
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
                <div className="absolute right-0 top-full mt-5 w-72 bg-white shadow-lg border border-gray-100 py-0 z-20">
                  {moreMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block w-full px-6 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setShowDropdown(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-700">
                  Xin chào, {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
