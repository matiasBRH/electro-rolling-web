import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import { postAuth } from "../helpers/fetchApi";

const ModalLogin = ({ show, handleClose }) => {

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
        document.location.reload()
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
            <Button variant="primary" type="submit" onClick={validarDatos}>
                Ingresar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            
        </Modal.Footer>
        
        {message && (
            <div className = {message?.ok
                  ? "alert alert-success mt-3"
                  : "alert alert-danger mt-3"
              }
              role="alert">
              {message.msg}
            </div>
          )}
        </Modal>
    );
};

export default ModalLogin;