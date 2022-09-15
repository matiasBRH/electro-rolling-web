import React from "react";
import {Link, NavLink} from "react-router-dom"
import NumberFormat from 'react-number-format';
import { useState, useEffect } from "react";
import NuevoProducto from "../components/NuevoProducto"
import noImage from "../assets/No-Image-Placeholder.png"

const AdminTableRowProducts = (props) => {  
  const { producto } = props;
  const {inactivarProducto, activarProducto, handleShowE} = props
  const [index, setIndex] = useState(props.index)
  const [estadoProducto, setEstadoProducto] = useState(producto.estado)
  

  useEffect(() => {
    
  }, [estadoProducto])
  
  // Seccion para abrir modal de Nuevo producto
  // const [show, setShow] = useState(false);

  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  return (
    <tr>
      <td>{index}</td>
      <td>
        <img width="50px" src={producto.img} onError={noImage} className="avatar" alt=""></img>
      </td>
      <td><Link to={`/productos/${producto._id}`}>{producto.nombre}</Link></td>
      <td>{producto.categoria}</td>
      <td><NumberFormat value={producto.precio} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={'2'} fixedDecimalScale={true} prefix={'$'} /></td>
      <td>
        <button type="button" className="btn btn-warning me-1" onClick={event => handleShowE(producto)}>
          Edit
        </button>
        {/* <NuevoProducto show={show} handleClose={handleClose}/> */}

                        {estadoProducto == true ? (
                  <button type="button" className="btn btn-danger" onClick={event => {setEstadoProducto(false), inactivarProducto(producto._id)}}>Inactivar</button>
                ) : (
                  <button type="button" className="btn btn-primary" onClick={event => {setEstadoProducto(true), activarProducto(producto)}}>Activar</button>
                )}
      </td>
    </tr>
  );
};

export default AdminTableRowProducts;
