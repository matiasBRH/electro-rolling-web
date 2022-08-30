import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getProductById} from "../helpers/fetchApi"

const EditDelProd = () => {
    
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        getProductById(id).then((respuesta) => {
            console.log(respuesta);
            if (respuesta?.msg) {
            setMensaje(respuesta.msg);
            } else {
            setPost(respuesta.producto);
            }
            setLoading(false);
        });
    }, [id]);

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
                            <input type="text"className="form-control mb-2" name="nombre" value={post.nombre} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Detalle del producto</label>
                            <input type="textarea"className="form-control mb-2" name="detalle" value={post.detalle} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Categoria</label>
                            <input type="text"className="form-control mb-2" name="categoria" value={post.categoria} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Imagen</label>
                            <input type="text"className="form-control mb-2" name="img" value={formValues.img} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Precio</label>
                            <input type="number"className="form-control mb-2" name="precio" value={post.precio} onChange={handleChange} required/>
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

export default EditDelProd