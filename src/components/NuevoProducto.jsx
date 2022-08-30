import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NumberFormat from 'react-number-format';
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
                handleShow()
                setFormValues({
                    nombre: "",
                    detalle: "",
                    categoria: "",
                    precio: "0",
                    img: ""
                });
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
                            <input type="text"className="form-control mb-2" name="categoria" value={formValues.categoria} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Imagen</label>
                            <input type="text"className="form-control mb-2" name="img" value={formValues.img} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Precio</label>
                            <input type="number"className="form-control mb-2" name="precio" value={formValues.precio} onChange={handleChange} required/>
                        </div>
                    </form>
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
