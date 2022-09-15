import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoutes = ({ children }) => {
    let role = ""
  if (JSON.parse(localStorage.getItem('dataUser'))!==null) {    
    role = JSON.parse(localStorage.getItem('dataUser')).rol_user;
  }
  

  if (role!="ADMIN_ROLE") {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoutes;
