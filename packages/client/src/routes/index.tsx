import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthGuard from "../auth/AuthGuard";
import GuestGuard from "../auth/GuestGuard";
import { PATH_AFTER_LOGIN } from "../config-global";
import CompactLayout from "../layouts/compact";
import DashboardLayout from "../layouts/dashboard";
import { LoginPage, Page404, PageOne, PageThree, PageTwo } from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: "login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: "one", element: <PageOne /> },
        { path: "two", element: <PageTwo /> },
        { path: "three", element: <PageThree /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: "404", element: <Page404 /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
