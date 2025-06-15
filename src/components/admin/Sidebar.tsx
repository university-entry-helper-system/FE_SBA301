import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaUser, FaUsers, FaCog, FaHome } from "react-icons/fa";

const menuItems = [
  { path: "/admin", label: "Dashboard", icon: <FaHome /> },
  { path: "/admin/users", label: "Users", icon: <FaUsers /> },
  { path: "/admin/settings", label: "Settings", icon: <FaCog /> },
];

export function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={`bg-white h-screen shadow-lg transition-all duration-200 ${open ? "w-64" : "w-20"} flex flex-col`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <img src="/avatar.png" alt="Admin" className="w-8 h-8 rounded-full" />
          {open && <span className="font-semibold">Admin</span>}
        </div>
        <button onClick={() => setOpen(!open)} className="text-gray-500">
          <FaBars />
        </button>
      </div>
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center w-full px-4 py-2 my-1 rounded transition-colors
              ${location.pathname === item.path ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-100"}
            `}
          >
            <span className="text-lg">{item.icon}</span>
            {open && <span className="ml-3">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
} 