import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Login from "./pages/Login";
import AdminSidebar from "./pages/admin";

// 1. Create the router
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/student", element: <StudentDashboard /> },
  { path: "/teacher", element: <TeacherDashboard /> },
  { path: "/login", element: <Login /> },
  {path: "/admin", element: <AdminSidebar /> },
]);

// 2. Create the QueryClient
const queryClient = new QueryClient();

// 3. Wrap Router inside QueryClientProvider (only one root render)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
