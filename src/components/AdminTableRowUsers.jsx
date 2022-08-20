import React from 'react'

const AdminTableRowUsers = (props) => {
  const {user} = props
  return (
    <tr>      
      <td>{user.nombre}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.estado?"Activo":"Desactivado"}</td>
      <td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id']+')">Edit</button><button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id']+')">Del</button></td>
    </tr>
  )
}

export default AdminTableRowUsers