import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {postProductos} from "../helpers/fetchApi"


const NuevoProducto = ({ show, handleClose }) => {

    const [formValues, setFormValues] = useState({
        nombre: "",
        detalle: "",
        categoria: "",
        precio: "0",
        img: ""
    });

    const [message, setMessage] = useState([])

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        postProductos(formValues).then((respuesta) => {
    
            console.log(respuesta);
        
            if (respuesta?.errors){
                setMessage(respuesta.errors);
            } else {                
                setFormValues({
                    nombre: "",
                    detalle: "",
                    categoria: "",
                    precio: "0",
                    img: ""
                });
                handleClose()
                setTimeout(() => {
                setMessage([]);
                }, 2000);
            }
        });
    };

    return (

        <>    
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Carga de producto.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label>Nombre del producto</label>
                            <input type="text"className="form-control mb-2" name="nombre" value={formValues.nombre} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Detalle del producto</label>
                            <input type="textarea"className="form-control mb-2" name="detalle" value={formValues.detalle} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Categoria</label>                            
                            <select class="form-select" aria-label="Default select example" name="categoria" value={formValues.categoria} onChange={handleChange} required>
                                <option selected></option>
                                <option value="CELULARES">CELULARES</option>
                                <option value="HELADERAS">HELADERAS</option>
                                <option value="NOTEBOOKS">NOTEBOOKS</option>
                                <option value="TELEVISORES">TELEVISORES</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Imagen</label>
                            <input type="text"className="form-control mb-2" name="img" value={formValues.img} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Precio</label>
                            <input type="number"className="form-control mb-2" name="precio" value={formValues.precio} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                           
                           <button class="btn btn-primary" type='submit'>Guardar</button>
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
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NuevoProducto
