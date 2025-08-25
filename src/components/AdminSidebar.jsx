import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faTachometerAlt,
  faUserTie,
  faUsers,
  faMoneyBill,
  faCog,
  faUser,
  faFileAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const sidebarLinks = [
  { name: "Dashboard", icon: faTachometerAlt, href: "/admin/dashboard" },
  { name: "Teachers", icon: faUserTie, href: "/admin/teachers" },
  { name: "Students/Classes", icon: faUsers, href: "/admin/students-classes" },
  { name: "Billing", icon: faMoneyBill, href: "/admin/billing" },
  { name: "Settings", icon: faCog, href: "/admin/settings" },
  { name: "Profile", icon: faUser, href: "/admin/profile" },
  { name: "Exams", icon: faFileAlt, href: "/admin/exams" },
];

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Auto-close sidebar when switching to mobile view
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Set initial state based on screen size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking on a link (mobile only)
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-[#17446A] text-white"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-screen w-64 bg-[#17446A] shadow flex flex-col transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center py-8 border-b border-blue-800">
          <FontAwesomeIcon
            icon={faSchool}
            size="2x"
            className="text-blue-400 mb-2"
          />
          <span className="text-xl font-bold text-white">School Name</span>
        </div>

        <nav className="flex-1 mt-6 overflow-y-auto">
          <ul>
            {sidebarLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center px-6 py-3 text-white hover:bg-blue-700 transition-colors"
                >
                  <FontAwesomeIcon icon={link.icon} className="mr-3" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Close hint for mobile */}
        {isMobile && (
          <div className="p-4 text-center text-blue-300 text-sm border-t border-blue-800">
            Click anywhere outside to close
          </div>
        )}
      </aside>
    </>
  );
}
