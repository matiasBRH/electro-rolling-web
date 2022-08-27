import React, { useEffect, useState } from "react";
import AdminTableRowUsers from '../components/AdminTableRowUsers';
import { getAllUsers } from '../helpers/fetchApp';

const AdminUsers = () => {
    
    const [posts, setPosts] = useState({
        products: [],
        total: 0,
      });
    
      const [registro, setRegistro] = useState(0);
    
      const [loading, setLoading] = useState(true);
      const [mensaje, setMensaje] = useState("");
    
      useEffect(()=>{    
        getAllUsers().then((respuesta)=>{
          console.log(respuesta);
          if (respuesta?.msg) {
            setMensaje(respuesta.msg);
          } else {
            setPosts({
              products: respuesta.usuarios,
              total: respuesta.total,
            });
          }
          setLoading(false);
        });
      }, [registro]);

      
  return (
    <>
    <div className="d-flex bd-highlight mb-3">
    <div className="me-auto p-2 bd-highlight"><h2>Lista de Usuarios:</h2></div>
    {/* <div className="p-2 bd-highlight">
      <button type="button" className="btn btn-secondary" onclick="showUserCreateBox()">Create</button>
    </div> */}
  </div>
  
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>      
          <th scope="col">#</th>        
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Rol</th>
          <th scope="col">Estado</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody id="mytable">

      {loading ? (
         <tr>
          <th scope="row" colspan="5">Cargando...</th>
        </tr> 
        ) :
        (
        <>
        {console.log(posts.products)}
        {posts.products.map((user,index) => (
          
          <AdminTableRowUsers key={user.uid} user={user} index={index} />
        ))}
        </>
        )}
      </tbody>
    </table>
  </div>
  </>
  )
}

export default AdminUsers