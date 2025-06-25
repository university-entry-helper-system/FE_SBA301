import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/admin/Sidebar";
import { AdminNavbar } from "@/components/admin/AdminNavbar";

export const AdminLayout = () => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <AdminNavbar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  </div>
); 