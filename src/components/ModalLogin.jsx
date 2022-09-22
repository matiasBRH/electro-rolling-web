import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
    console.log(datos)
    postAuth(datos).then((respuesta) => {
      console.log(respuesta);

      if (respuesta?.token) 
      {
        setMessage([{ ok: true, msg: "Login ok" }]);
        localStorage.setItem("token", JSON.stringify(respuesta.token));
        localStorage.setItem("dataUser",JSON.stringify({ rol_user: respuesta.usuario.role }));
        navigate("/");
        handleClose();
        setShow(false)
        setBoton(true)
        setMessage([])

      } else {
        if (respuesta.errors){
          setMessage(respuesta.errors);        
        } else{
          setMessage([respuesta]);        
        }
        
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
                      <label className="form-label">Correo Electónico</label>
                      <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="usuario@ejemplo.com" required/>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="******" minLength={6} required/>
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
        {message &&
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
        </Modal>
    );
};

export default ModalLogin;