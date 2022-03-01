import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, condition, navigateTo = "/" }) =>
  condition ? children : <Navigate to={navigateTo} />;

export default PrivateRoute;
