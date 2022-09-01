import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { postAuth } from "../helpers/fetchApi";

const ModalLogin = ({ show, handleClose }) => {
  const navigate = useNavigate();

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
      if (respuesta?.token) {
        setMessage({ ok: true, msg: "Login ok" });
        localStorage.setItem("token", JSON.stringify(respuesta.token));
        navigate("/");
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
            <input
              type="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nombre@ejemplo.com"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              required
            />
          </div>
          <button className="btn btn-primary"  onClick={validarDatos}>
            Ingresar
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="success"  onClick={validarDatos}>
                Ingresar
            </Button> */}
        <Button variant="success" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
      {message && (
        <div
          className={
            message?.ok ? "alert alert-success mt-3" : "alert alert-danger mt-3"
          }
          role="alert"
        >
          {message.msg}
        </div>
      )}
    </Modal>
  );
};

export default ModalLogin;
