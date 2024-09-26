import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import LoadingScreen from "../components/loading-screen";
import { useAuthContext } from "./useAuthContext";
import React from "react";

// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <> {children} </>;
}
