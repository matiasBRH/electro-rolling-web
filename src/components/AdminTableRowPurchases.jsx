import React, { useEffect } from "react";
import { useState } from "react";
import Moment from 'moment';

const AdminTableRowPurchases = (props) => {
  console.log(props)
  const { compra } = props;
  const [index, setIndex] = useState(props.index)
  
  return (
    <tr>
      <td>{index}</td>
      <td>{Moment(compra.fecha).format('DD-MM-YYYY hh:mm:ss')}</td>
      <td>{compra.producto.length}</td>
      <td>{compra.usuario.email}</td>
      {/* <td>{user.estado ? "Activo" : "Desactivado"}</td> */}
      {/* <td>
        <button
          type="button"
          className="btn btn-warning me-1"
          onclick="showUserEditBox('+object['id']+')"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onclick="userDelete('+object['id']+')"
        >
          Del
        </button>
      </td> */}
    </tr>
  );
};

export default AdminTableRowPurchases;
