import React from 'react'
import { NavLink } from 'react-router-dom'

const PasswordScreen = () => {
  return (
    <div className="container mb-5 mt-5">
    <div className="row my-3 mb-4 mt-5">
      <div className="col text-center">
        <h3>
          <i className="fa fa-bell-o" aria-hidden="true"></i> Recuperar contraseña
        </h3>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 offset-md-3">
      
          <div className="form-group">
            <label>Correo</label>
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña actual</label>
            <input
              type="password"
              className="form-control mb-2"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <label>Nueva la contraseña</label>
            <input
              type="password"
              className="form-control mb-2"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <label>Repita la nueva contraseña</label>
            <input
              type="password"
              className="form-control mb-2"
              name="password"
              required
            />
          </div>

          <div className="d-grid">
          <NavLink to="/send"><button className="btn btn-success">Recuperar</button></NavLink>
            
          </div>
      </div>
    </div>
  </div>
  )
}

export default PasswordScreen