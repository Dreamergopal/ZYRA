import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const status = useSelector((state) => state.auth.status);

  return status === true ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
