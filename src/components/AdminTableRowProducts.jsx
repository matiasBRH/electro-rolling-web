import React from "react";
import {Link, NavLink} from "react-router-dom"
import NumberFormat from 'react-number-format';
import { useState } from "react";
import NuevoProducto from "../components/NuevoProducto"

const AdminTableRowProducts = (props) => {
  const { producto } = props;
  const [index, setIndex] = useState(props.index)
  

  // Seccion para abrir modal de Nuevo producto
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <tr>
      <td>{index}</td>
      <td>
        <img width="50px" src={producto.img} className="avatar" alt=""></img>
      </td>
      <td><Link to={`/productos/${producto._id}`}>{producto.nombre}</Link></td>
      <td>{producto.categoria}</td>
      <td><NumberFormat value={producto.precio} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={'2'} fixedDecimalScale={true} prefix={'$'} /></td>
      <td>
        <button type="button" className="btn btn-warning" onClick={handleShow}>
          Edit
        </button>
        <NuevoProducto show={show} handleClose={handleClose}/>

        <button type="button" className="btn btn-danger" onClick="userDelete('+object['id']+')">
          Del
        </button>
      </td>
    </tr>
  );
};

export default AdminTableRowProducts;
