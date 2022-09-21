import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {getUserbyToken} from "../helpers/fetchApi"

const ProtectedRoutes = ({ children }) => {
  const [permiso, setPermiso] = useState("")

  useEffect(() => {
    getUserbyToken().then((respuesta) => {
      console.log(respuesta);
      const {role} = respuesta.usuario
      setPermiso(role)
    }).catch((respuesta)=>{    
    });
  }, [])
  
  if (permiso!=="ADMIN_ROLE") {
    // return <Navigate to="/" />;
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="alert alert-danger">No tiene permisos para acceder a esta sección</div>
          </div>
        </div>
      </div>
    )
    console.log("no esta logueado admin ")
  } else {
    console.log("logueado admin ")
    return children;
    
  }

  

  // if (JSON.parse(localStorage.getItem('dataUser'))!==null) {    
  //   role = JSON.parse(localStorage.getItem('dataUser')).rol_user;
  // }
  

  
};

export default ProtectedRoutes;