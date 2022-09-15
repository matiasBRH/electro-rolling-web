import React, { useState } from "react";
import { postUsuario } from "../helpers/fetchApi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from "react-router-dom"
import "../css/registro.css"

const RegistroScreen = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "USER_ROLE",
  });

  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    postUsuario(formValues).then((respuesta) => {

      console.log(respuesta);

      if (respuesta?.errors)
      {
        setMessage(respuesta.errors);
      } 
      else {
        handleShow()
        setFormValues({
          nombre: "",
          email: "",
          password: "",
          role: "USER_ROLE",
        });
        setTimeout(() => {
          setMessage([]);
        }, 2000);
      }
    });
  };


  return (
      <div className="container alturaParaFooter">     
        <div className="row my-3 mb-4 ">
          <div className="col text-center">
            <h3>
              <i className="fa fa-user-circle-o" aria-hidden="true"></i> Registro
              de usuario
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control mb-2" name="nombre" value={formValues.nombre} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label>Correo</label>
                <input type="email" className="form-control mb-2" name="email" value={formValues.email} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" className="form-control mb-2" name="password" value={formValues.password} onChange={handleChange} id="pass1" required/>
              </div>
              <div className="form-group">
                <label>Repita la contraseña</label>
                <input type="password" className="form-control mb-2" name="password2" value={formValues.password2} onChange={handleChange} id="pass2" required/>
              </div>
              <div className="d-grid">
                <button className="btn btn-success mt-3 px-2">Registrar</button>
                {/* <Button variant="success" onClick={handleShow}>Registrar</Button> */}

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
            </form>

            {message.length > 0 &&
              message.map((item, index) => (
                <div
                className={
                  item?.ok
                  ? "alert alert-success mt-3"
                  : "alert alert-danger mt-3"
                }
                role="alert"
                key={index}
                >
                  {item.msg}
                </div>
              ))}
          </div>
        </div>
      </div>
  )
}

export default RegistroScreen