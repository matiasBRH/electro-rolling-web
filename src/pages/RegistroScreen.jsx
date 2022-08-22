import React, { useState } from 'react';
import '../css/registro.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from "react-router-dom"

const RegistroScreen = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Button variant="success" onClick={handleShow}>Registrar</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>¡Registro exitoso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Su registro se completó con éxito</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <NavLink className="nav-link" to="/"><Button variant="success" onClick={handleClose}>
            Regresar
          </Button></NavLink>
         
        </Modal.Footer>
      </Modal>
  
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegistroScreen