import React from 'react'
import { useNavigate } from "react-router-dom";


const LoginScreen = () => {
    
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-12 col-md-6 offset-md-3">
        <div className="card mt-5">
          <div className="card-header text-center">
            <h2>
              <i className="fa fa-user-circle-o me-3" aria-hidden="true"></i>
              Iniciar Sesion
            </h2>
          </div>
          <div className="card-body text-center">
            <label className="me-3">Usuario</label>
            <br />
            <input
              type="text"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label>Contraseña</label>
            <br />
            <input
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="card-footer d-flex justify-content-evenly">
            <button className="btn btn-success btn-lg">
              Iniciar Sesion
            </button>
            <button className="btn btn-success btn-lg">
              <i className="fa fa-google me-2" aria-hidden="true"></i>Google
            </button>
          </div>
        </div>
        {/* {message && (
          <div
            className={
              message?.ok
                ? "alert alert-success mt-3"
                : "alert alert-danger mt-3"
            }
            role="alert"
          >
            {message.msg}
          </div>
        )} */}
        {/* {message &&
          
            <div
              className={
                item?.token
                  ? "alert alert-success mt-3"
                  : "alert alert-danger mt-3"
              }
              role="alert"
              key={index}
            >
              {item.msg}
            </div>
          )} */}
      </div>
    </div>
  </div>
    

  )
}

export default LoginScreen