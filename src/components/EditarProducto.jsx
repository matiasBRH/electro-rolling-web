import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {putProductos} from "../helpers/fetchApi"


const EditarProducto = ({ show, handleClose, datos }) => {

    // const {editInfo} = props

    const [formValues, setFormValues] = useState({
        nombre: "",
        detalle: "",
        categoria: "",
        precio: "1",
        img: ""
    });

    const [message, setMessage] = useState([])

    useEffect(() => {
      console.log(datos)
      setFormValues({
        nombre: datos.nombre,
        detalle: datos.detalle,
        categoria: datos.categoria,
        precio: datos.precio,
        img: datos.img,
        id: datos._id
    });
    }, [])
    

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        putProductos(formValues).then((respuesta) => {
    
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
                alert("Producto editado correctamente")
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
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label>Nombre del producto (3 a 30 caracteres)</label>
                            <input type="text" className="form-control mb-2" pattern=".{3,60}" name="nombre" value={formValues.nombre} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Detalle del producto (3 a 100 caracteres) </label>
                            <textarea  type="textarea"className="form-control mb-2" pattern=".{3,120}" name="detalle" rows="3" value={formValues.detalle} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Categoria</label>                            
                            <select className="form-select" aria-label="Default select example" name="categoria" value={formValues.categoria} onChange={handleChange} required>
                                <option selected>Elegir Categoria</option>
                                <option value="CELULARES">CELULARES</option>
                                <option value="HELADERAS">HELADERAS</option>
                                <option value="NOTEBOOKS">NOTEBOOKS</option>
                                <option value="TABLETS">TABLETS</option>
                                <option value="TELEVISORES">TELEVISORES</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Imagen</label>
                            <input type="text"className="form-control mb-2" name="img" value={formValues.img} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Precio $</label>
                            <input type="number"className="form-control mb-2" name="precio" min="1" max="10000000" value={formValues.precio} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                           
                           <button className="btn btn-success" type='submit'>Guardar</button>
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
                    {/* <Button variant="success" onClick={handleClose}>
                        Guardar
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditarProducto
