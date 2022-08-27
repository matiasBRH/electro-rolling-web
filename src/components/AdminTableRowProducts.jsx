import React from "react";
import {Link, NavLink} from "react-router-dom"
import NumberFormat from 'react-number-format';
import { useState } from "react";

const AdminTableRowProducts = (props) => {
  const { producto } = props;
  const [index, setIndex] = useState(props.index)
  
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
        <button
          type="button"
          className="btn btn-outline-secondary"
          onclick="showUserEditBox('+object['id']+')"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onclick="userDelete('+object['id']+')"
        >
          Del
        </button>
      </td>
    </tr>
  );
};

export default AdminTableRowProducts;
