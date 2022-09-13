import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import { postAuth } from "../helpers/fetchApi";

const ModalLogin = ({ show, handleClose, setBoton, setShow }) => {

    const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState([]);


  const validarDatos = () => {    
    const datos = {
      email,
      password,
    };
    postAuth(datos).then((respuesta) => {
      console.log(respuesta);

      if (respuesta?.token) 
      {
        setMessage({ ok: true, msg: "Login ok" });
        localStorage.setItem("token", JSON.stringify(respuesta.token));        
        navigate("/");
        handleClose();
        setShow(false)
        setBoton(true)

      } else {
        setMessage(respuesta);
      }
    });
  };
  
    return (

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>
                  <h2>
                      <i className="fa fa-user-circle-o me-3" aria-hidden="true"></i>
                      Iniciar Sesion
                  </h2>
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                  <div className="mb-3">
                      <label className="form-label">Correo Electonico</label>
                      <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required/>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="***" minLength={6} maxLength={10} required/>
                  </div>
                  {/* <button className="btn btn-success" onClick={validarDatos}>Ingresar</button> */}
              </form>
              <NavLink to='/password'><Button variant='link' onClick={handleClose}>¿Olvidaste tu contraseña?</Button></NavLink>
              <NavLink to='/register'><Button variant='link' onClick={handleClose}>Registrate</Button></NavLink>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="success" type="submit" onClick={validarDatos}>
                  Ingresar
              </Button>
              <Button variant="success" onClick={handleClose}>
                  Cancelar
              </Button>
              
          </Modal.Footer>

<<<<<<< HEAD
          {message && (
              <div className = {message?.ok
                    ? "alert alert-success mt-3"
                    : "alert alert-danger mt-3"
                }
                role="alert">
                {message.msg}
              </div>
            )}
=======
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" onClick={validarDatos}>
                Ingresar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
>>>>>>> b879c72ed2f0bc03032c4b0aaf4fa14afc7f4e15
            
        </Modal>
    );
};

export default ModalLogin;