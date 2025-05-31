import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">EduPath</span>
              <span className="text-sm ml-1">.com</span>
            </div>
            <p className="text-sm mb-2">
              CƠ QUAN CHỦ QUẢN: CÔNG TY CỔ PHẦN
              CÔNG NGHỆ GIÁO DỤC SƠN NAM
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/admission" className="hover:text-blue-200">
                  Xem đề án tuyển sinh ĐH 2025
                </Link>
              </li>
              <li>
                <Link to="/benchmark" className="hover:text-blue-200">
                  Xem điểm chuẩn Đại học
                </Link>
              </li>
              <li>
                <Link to="/high-school-scores" className="hover:text-blue-200">
                  Công cụ tính điểm học bạ 2025
                </Link>
              </li>
              <li>
                <Link to="/combinations" className="hover:text-blue-200">
                  Tổ hợp xét tuyển Đại học 2025
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-2 text-sm">
              <li>Hotline: 0650-113-113</li>
              <li>Email: cachsat@edupath.com</li>
              <li>
              Nhà Văn Hóa Sinh Viên
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Chứng nhận</h3>
            <p className="text-sm">
              Giấy phép cung cấp dịch vụ mạng xã hội trực tuyến 
            </p>
            <p className="text-sm mt-2">
              Giấy phép kinh doanh giáo dục: FPT-096696969
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 