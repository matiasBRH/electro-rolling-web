import React, { useEffect } from "react";
import { useState } from "react";
import Moment from 'moment';

const AdminTableRowPurchases = (props) => {
  console.log(props)
  const { compra } = props;
  const [index, setIndex] = useState(props.index)
  
  return (
    <tr>
      <td>{index+1}</td>
      <td>{Moment(compra.fecha).format('DD-MM-YYYY hh:mm:ss')}</td>
      <td>{compra.producto.length}</td>
      <td>{compra.usuario.nombre}</td>      
      <td>{compra.usuario.email}</td>      
    </tr>
  );
};

export default AdminTableRowPurchases;
