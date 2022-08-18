import React from 'react'

const AdminTableRow = (props) => {
  const {producto} = props
  return (
    <tr>
      <td>{producto.id}</td>
      <td><img width="50px" src={producto.imagen} class="avatar" alt=""></img></td>
      <td>{producto.nombre}</td>
      <td>{producto.categoria}</td>
      <td>$ {producto.precio}</td>
      <td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id']+')">Edit</button><button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id']+')">Del</button></td>
    </tr>
  )
}

export default AdminTableRow