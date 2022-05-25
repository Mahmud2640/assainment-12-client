import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";


const RequireAdmin = () => {
  const location = useLocation();
  const [admin] = useAdmin();

  if (!admin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireAdmin;
