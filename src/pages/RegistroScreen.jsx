import React, { useState } from "react";
import { postUsuario } from "../helpers/fetchApi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"
import Alerta from "../components/Alerta"
import "../css/registro.css"

const RegistroScreen = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
    role: "USER_ROLE",
  });

  const [message, setMessage] = useState([]);
  const [alerta, setAlerta] = useState([]);

  const handleChange = (e) => {
    setMessage([])
    setAlerta([])
    setFormValues({...formValues,[e.target.name]: e.target.value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
  
    if (formValues.password !== formValues.password2)
    {
      setAlerta({
        msg:"Las contraseñas no coinciden",
        error: true
      })

    }else {
      
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
    }
  };
  
  const {msg} = alerta
  
  return (
    <>
      <div className="container alturaParaFooter carritoAlturaFooter">     
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
                <label>Nombre (3 a 30 caracteres)</label>
                <input type="text" className="form-control mb-2" name="nombre" pattern="^[a-zA-Z][a-zA-Z0-9]{2,30}" value={formValues.nombre} onChange={handleChange} maxLength="35" minLength="1" required/>
              </div>
              <div className="form-group">
                <label>Correo</label>
                <input type="email" className="form-control mb-2" name="email" value={formValues.email} onChange={handleChange} maxLength="35"  required/>
              </div>
              <div className="form-group">
                <label>Contraseña (6 o más caracteres)</label>
                <input type="password" className="form-control mb-2" name="password"  value={formValues.password} onChange={handleChange} id="pass1" minLength="6"  required/>
              </div>
              <div className="form-group">
                <label>Repita la contraseña</label>
                <input type="password" className="form-control mb-2" name="password2" value={formValues.password2} onChange={handleChange} id="pass2" minLength="6" required/>
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
                    <NavLink className="nav-link" to="/"><Button variant="success" onClick={handleClose}>
                      Regresar
                    </Button></NavLink>
                  </Modal.Footer>
                </Modal>
              </div>
            </form>

            {msg && <Alerta alerta= {alerta}/>}

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
      <div className="fixed-bottom">

        <Footer/>
      </div>
    </>
  )
}

export default RegistroScreen