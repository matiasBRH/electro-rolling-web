import React from 'react';
import '../css/registro.css';

const RegistroScreen = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className="row my-3 mb-4 mt-5">
        <div className="col text-center">
          <h3>
            <i className="fa fa-user-circle-o" aria-hidden="true"></i> Registro
            de usuario
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
        
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control mb-2"
                name="nombre"
                required
              />
            </div>
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
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                required
              />
            </div>
            <div className="form-group">
              <label>Repita la contraseña</label>
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                required
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-success mt-3 px-2">Registrar</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegistroScreen