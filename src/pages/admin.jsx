import React, { useState } from "react";
import AdminSidebar from "../components/AdminSideBar";
import Navbar from "../components/Navbar";
import Dashboard from "../components/AdminDashboard";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const user = {
    name: "John Doe",
    email: "john.doe@malooksschool.com",
    role: "Administrator"
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onToggleSidebar={toggleSidebar} user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}