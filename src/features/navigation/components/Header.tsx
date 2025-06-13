import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";

interface MenuItem {
  path: string;
  label: string;
  component: string;
}

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user, logout } = useAuth();

  const moreMenuItems: MenuItem[] = [
    {
      path: "/school-consultation",
      label: "Tư vấn chọn trường",
      component: "SchoolConsultation",
    },
    {
      path: "/ielts-score-conversion",
      label: "Quy đổi điểm IELTS",
      component: "IeltsScoreConversion",
    },
    {
      path: "/university-admission-calculator",
      label: "Cách tính điểm xét tuyển ĐH",
      component: "UniversityAdmissionCalculator",
    },
    {
      path: "/competency-score-conversion",
      label: "Quy đổi điểm BGNL, ĐGTD",
      component: "CompetencyScoreConversion",
    },
    {
      path: "/bonus-points",
      label: "Điểm ưu tiên, điểm khuyến khích",
      component: "BonusPoints",
    },
    {
      path: "/school-major-codes",
      label: "Mã Trường - Mã ngành ĐH",
      component: "SchoolMajorCodes",
    },
    {
      path: "/admission-results",
      label: "Danh sách trúng tuyển",
      component: "AdmissionResults",
    },
    {
      path: "/graduation-score-calculator",
      label: "Công cụ tính điểm tốt nghiệp THPT",
      component: "GraduationScoreCalculator",
    },
    {
      path: "/exam-rankings",
      label: "Tra cứu xếp hạng thi",
      component: "ExamRankings",
    },
    {
      path: "/graduation-exam-scores",
      label: "Điểm thi tốt nghiệp THPT",
      component: "GraduationExamScores",
    },
  ];

  // Main menu items (not in moreMenuItems)
  const mainMenuItems = [
    { path: "/de-an-tuyen-sinh", label: "Đề án tuyển sinh" },
    { path: "/cac-nganh-dao-tao", label: "Các ngành đào tạo" },
    { path: "/tinh-diem-hoc-ba", label: "Tính điểm xét học bạ THPT" },
    { path: "/diem-chuan", label: "Điểm chuẩn đại học" },
  ];

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setShowMobileMenu(false);
      }
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

  // Merge all menu items for mobile
  const allMenuItems = [
    ...mainMenuItems,
    ...moreMenuItems.map(({ path, label }) => ({ path, label })),
  ];

  return (
    <header className="bg-gradient-subtle shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary-700">EDUPATH</span>
          </Link>

          {/* Desktop menu */}
          <div className="flex-1 items-center justify-center space-x-6 hidden md:flex">
            {mainMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-neutral-700 hover:text-primary-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {/* More menu: only show on md+ */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 text-primary-700 hover:text-accent-400 transition-colors"
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
                <div className="absolute right-0 top-full mt-5 w-72 bg-white shadow-lg border border-neutral-100 py-0 z-20">
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block w-full px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-700 transition-colors border-b border-neutral-100 last:border-b-0"
                      onClick={() => setShowDropdown(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Auth buttons (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-neutral-700">
                  Xin chào, {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="text-neutral-700 hover:text-primary-700 transition-colors"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-neutral-700 hover:text-primary-700 transition-colors"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="text-neutral-700 hover:text-primary-700 transition-colors"
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>

          {/* Hamburger icon (mobile only) */}
          <button
            className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Mở menu"
          >
            <svg
              className="w-7 h-7 text-primary-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 bg-black/40 flex md:hidden">
          <div
            ref={mobileMenuRef}
            className="bg-gradient-subtle w-4/5 max-w-xs h-full shadow-lg p-6 flex flex-col gap-2 animate-slide-in-left"
          >
            <button
              className="self-end mb-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
              onClick={() => setShowMobileMenu(false)}
              aria-label="Đóng menu"
            >
              <svg
                className="w-6 h-6 text-neutral-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {allMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 px-2 text-base font-medium text-neutral-700 hover:text-primary-700 hover:bg-white/50 rounded transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-neutral-200 my-2"></div>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setShowMobileMenu(false);
                }}
                className="block w-full text-left py-3 px-2 text-base font-medium text-neutral-700 hover:text-primary-700 hover:bg-white/50 rounded transition-colors"
              >
                Đăng xuất
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block py-3 px-2 text-base font-medium text-neutral-700 hover:text-primary-700 hover:bg-white/50 rounded transition-colors"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="text-neutral-700 hover:text-primary-700 transition-colors"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setShowMobileMenu(false)} />
        </div>
      )}
    </header>
  );
}
