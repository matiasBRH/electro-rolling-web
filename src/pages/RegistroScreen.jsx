import React, { useState } from "react";
import { postUsuario } from "../helpers/fetchApp";
import '../css/registro.css';

const RegistroScreen = () => {
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
      if (respuesta?.errors) {
        setMessage(respuesta.errors);
      } else {
        setMessage([{ ok: true, msg: "Registro exitoso!" }]);
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
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control mb-2"
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Correo</label>
              <input
                type="email"
                className="form-control mb-2"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="form-group">
              <label>Repita la contraseña</label>
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                value={formValues.p}
                onChange={handleChange}
                required
              />
            </div> */}
            <div className="d-grid">
              <button className="btn btn-success mt-3 px-2">Registrar</button>
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