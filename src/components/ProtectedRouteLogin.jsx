import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRouteLogin = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};