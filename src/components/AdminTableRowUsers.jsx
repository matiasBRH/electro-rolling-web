import React from "react";
import { useState } from "react";

const AdminTableRowUsers = (props) => {
  const { user } = props;
  const [index, setIndex] = useState(props.index)

  return (
    <tr>
      <td>{index}</td>
      <td>{user.nombre}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.estado ? "Activo" : "Desactivado"}</td>
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

export default AdminTableRowUsers;
