import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footer from "../components/Footer"
import "../css/registro.css"


const PasswordScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <div className="container alturaParaFooterRegis">

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
              <input type="email" className="form-control mb-2" name="email" required/>
            </div>
            <div className="form-group">
              <label>Nueva la contraseña</label>
              <input type="password" className="form-control mb-2" name="password" required/>
            </div>
            <div className="form-group">
              <label>Repita la nueva contraseña</label>
              <input type="password" className="form-control mb-2" name="password" required/>
            </div>
          <div className="d-grid">
            <Button variant="success mt-3" onClick={handleShow}>Recuperar</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>¡Contraseña actualizada!</Modal.Title>
              </Modal.Header>
              <Modal.Body>Te envíamos un email con un link de confirmación.</Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  Aceptar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed-bottom">

      <Footer/>
    </div>
    </>
  )
}

export default PasswordScreen