import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

export const Header = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const moreMenuRef = useRef<HTMLDivElement>(null)

  const moreMenuItems = [
    'Tư vấn chọn trường',
    'Điểm chuẩn vào 10',
    'Quy đổi điểm IELTS',
    'Cách tính điểm xét tuyển ĐH',
    'Quy đổi điểm BGNL, ĐGTD',
    'Điểm ưu tiên, điểm khuyến khích',
    'Mã Trường - Mã ngành ĐH',
    'Danh sách trúng tuyển',
    'Công cụ tính điểm tốt nghiệp THPT',
    'Tra cứu xếp hạng thi',
    'Điểm thi vào 10',
    'Điểm thi tốt nghiệp THPT',
    'Đếm ngược'
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setShowMoreMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">EduPath</span>
            <span className="text-sm ml-1">.com</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/admission-samples" className="text-gray-700 hover:text-blue-600">
              Đề án tuyển sinh
            </Link>
            <Link to="/majors" className="text-gray-700 hover:text-blue-600">
              Các ngành đào tạo
            </Link>
            <Link to="/high-school-scores" className="text-gray-700 hover:text-blue-600">
              Tính điểm xét học bạ THPT
            </Link>
            <Link to="/benchmark-scores" className="text-gray-700 hover:text-blue-600">
              Điểm chuẩn đại học
            </Link>
            <div className="relative" ref={moreMenuRef}>
              <button
                className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
                onClick={() => setShowMoreMenu(!showMoreMenu)}
              >
                Xem thêm
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showMoreMenu && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-2">
                  {moreMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 group transition-colors"
                    >
                      <span className="flex-1">{item}</span>
                      <svg 
                        className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
} 