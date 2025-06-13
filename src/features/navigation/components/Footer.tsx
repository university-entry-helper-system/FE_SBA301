import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-primary-50 via-white to-primary-100/80 backdrop-blur-md border-t border-primary-100 py-10">
      {/* Thay đổi md:justify-between thành md:justify-around để phân bổ khoảng trống đều hơn */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-around items-center md:items-start gap-8">
        {/* Logo & Slogan */}
        {/* Đảm bảo items-start trên desktop */}
        <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0 md:w-1/3">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="/logo.png"
              alt="EduPath Logo"
              className="h-10 w-10 rounded bg-white p-1 shadow"
            />
            <span className="text-2xl font-bold tracking-tight">EduPath</span>
          </div>
          <span className="text-sm text-primary-800 text-center md:text-left">
            Đồng hành cùng bạn trên con đường đại học
          </span>
        </div>

        {/* Quick Links */}
        {/* Giữ md:items-start để căn trái trên desktop, loại bỏ w-full và text-center khỏi ul/div con */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold mb-2 text-base">Liên kết nhanh</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/de-an-tuyen-sinh"
                className="inline-flex items-center gap-2 hover:text-accent-400 transition-colors group"
              >
                <span>Đề án tuyển sinh</span>
                <svg
                  className="w-4 h-4 text-accent-400 opacity-0 group-hover:opacity-100 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/diem-chuan"
                className="inline-flex items-center gap-2 hover:text-accent-400 transition-colors group"
              >
                <span>Điểm chuẩn Đại học</span>
                <svg
                  className="w-4 h-4 text-accent-400 opacity-0 group-hover:opacity-100 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/tinh-diem-hoc-ba"
                className="inline-flex items-center gap-2 hover:text-accent-400 transition-colors group"
              >
                <span>Tính điểm học bạ</span>
                <svg
                  className="w-4 h-4 text-accent-400 opacity-0 group-hover:opacity-100 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/school-major-codes"
                className="inline-flex items-center gap-2 hover:text-accent-400 transition-colors group"
              >
                <span>Mã trường - Mã ngành</span>
                <svg
                  className="w-4 h-4 text-accent-400 opacity-0 group-hover:opacity-100 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        {/* Giữ md:items-end để căn phải trên desktop, loại bỏ w-full và text-center/right khỏi ul/div con */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end gap-2">
          <h3 className="font-semibold mb-2 text-base">Liên hệ</h3>
          <ul className="space-y-1 text-sm mb-2">
            <li className="flex items-center gap-2 justify-center md:justify-end">
              <svg
                className="w-4 h-4 text-accent-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.163 23 1 16.837 1 9V8a2 2 0 012-2z"
                />
              </svg>
              <a
                href="tel:0650113113"
                className="hover:text-accent-400 transition-colors"
              >
                0650-113-113
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-end">
              <svg
                className="w-4 h-4 text-accent-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"
                />
              </svg>
              <a
                href="mailto:cachsat@edupath.com"
                className="hover:text-accent-400 transition-colors"
              >
                cachsat@edupath.com
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-end">
              <svg
                className="w-4 h-4 text-accent-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-4.418 0-8 2.239-8 5v2a2 2 0 002 2h12a2 2 0 002-2v-2c0-2.761-3.582-5-8-5z"
                />
              </svg>
              <span>Nhà Văn Hóa Sinh Viên</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-2 justify-center md:justify-end">
            {/* Social media icons */}
            <a
              href="https://facebook.com/edupath"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white/10 rounded-full p-2 hover:bg-accent-400 hover:text-white transition-colors shadow"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://youtube.com/edupath"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="bg-white/10 rounded-full p-2 hover:bg-accent-400 hover:text-white transition-colors shadow"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.454 3.5 12 3.5 12 3.5s-7.454 0-9.386.574A2.994 2.994 0 00.502 6.186C0 8.12 0 12 0 12s0 3.88.502 5.814a2.994 2.994 0 002.112 2.112C4.546 20.5 12 20.5 12 20.5s7.454 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 15.88 24 12 24 12s0-3.88-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
              </svg>
            </a>
            <a
              href="https://zalo.me/edupath"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo"
              className="bg-white/10 rounded-full p-2 hover:bg-accent-400 hover:text-white transition-colors shadow"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16 2C8.268 2 2 7.477 2 14.222c0 3.13 1.44 5.98 3.84 8.09-.13.97-.51 2.36-1.22 3.97a1 1 0 001.28 1.32c2.41-.54 4.36-1.23 5.7-1.76A18.6 18.6 0 0016 26.444c7.732 0 14-5.477 14-12.222C30 7.477 23.732 2 16 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright / Credit Section */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-primary-100 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} EduPath. All rights reserved.</p>
        <p>Thiết kế bởi Đội ngũ EduPath.</p>
      </div>
    </footer>
  );
};
