import { FaBell, FaSignOutAlt } from "react-icons/fa";

export function AdminNavbar() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow">
      <div className="font-bold text-xl text-purple-700">Admin Panel</div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-purple-600"><FaBell /></button>
        <img src="/avatar.png" alt="Admin" className="w-8 h-8 rounded-full" />
        <button className="text-gray-500 hover:text-red-600"><FaSignOutAlt /></button>
      </div>
    </header>
  );
} 