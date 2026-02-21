import { Navigate } from "react-router-dom";

const RoleBasedRoute = ({ children, allowedRole }) => {
  const role = localStorage.getItem("role");

  if (role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleBasedRoute;
