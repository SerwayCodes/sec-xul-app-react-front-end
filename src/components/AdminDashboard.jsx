import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faChalkboardTeacher,
  faUserGraduate,
  faChartLine,
  faFileAlt,
  faMoneyBill,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  // Quick action links
  const quickActions = [
    {
      title: "Add Admin",
      description: "Create new administrator accounts",
      icon: faUserPlus,
      href: "/admin/add-admin",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "Manage Classes",
      description: "Create and manage classes",
      icon: faChalkboardTeacher,
      href: "/admin/classes",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      title: "Add Students",
      description: "Register new students",
      icon: faUserGraduate,
      href: "/admin/add-students",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
  ];

  // Stats cards data
  const stats = [
    { label: "Total Students", value: "1,245", icon: faUserGraduate, change: "+12%", trend: "up" },
    { label: "Total Teachers", value: "45", icon: faChalkboardTeacher, change: "+5%", trend: "up" },
    { label: "Active Classes", value: "32", icon: faChalkboardTeacher, change: "+2", trend: "up" },
    { label: "Pending Tasks", value: "8", icon: faFileAlt, change: "-3", trend: "down" },
  ];

  return (
    <div className="p-6">
      {/* Centered Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to your Dashboard
        </h1>
        <p className="text-xl text-blue-600 font-semibold">
          Malooks School
        </p>
        <p className="text-gray-600 mt-2">
          Manage your school administration efficiently
        </p>
      </div>

      {/* Quick Actions Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              className={`block p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${action.color} ${action.hoverColor} text-white`}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={action.icon}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{action.title}</h3>
                  <p className="text-blue-100 opacity-90">{action.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          School Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change} from last week
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="w-5 h-5 text-blue-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[
            {
              action: "New student registration",
              user: "Sarah Johnson",
              time: "2 hours ago",
              icon: faUserGraduate,
              color: "text-green-500",
            },
            {
              action: "Exam results uploaded",
              user: "Mathematics Department",
              time: "5 hours ago",
              icon: faFileAlt,
              color: "text-blue-500",
            },
            {
              action: "Fee payment received",
              user: "Michael Brown",
              time: "1 day ago",
              icon: faMoneyBill,
              color: "text-green-500",
            },
            {
              action: "System settings updated",
              user: "Administrator",
              time: "2 days ago",
              icon: faCog,
              color: "text-purple-500",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center p-4 border-b border-gray-100 last:border-b-0"
            >
              <div className={`flex-shrink-0 ${activity.color} mr-4`}>
                <FontAwesomeIcon icon={activity.icon} className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-600">by {activity.user}</p>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}