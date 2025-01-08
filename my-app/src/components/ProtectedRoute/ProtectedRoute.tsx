import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../resources/routes-constants";
import { useAppSelector } from "../../hooks/storeHooks";

interface ProtectedRouteChildren {
  children: React.ReactNode
}
export function ProtectedRoute({ children }: ProtectedRouteChildren) {
  const isAuth = useAppSelector((state) => state.log.isAuth)

  if (!isAuth) {
    return <Navigate to={ROUTES.AUTHPAGE_ROUTE} replace />;
  }

  return <>{children}</>;
}