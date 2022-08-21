import React, { useEffect, useState } from "react";
import AdminTableRowProducts from '../components/AdminTableRowProducts';
import { getAllProduct } from '../helpers/fetchApp';

const AdminProducts = () => {

    const [posts, setPosts] = useState({
        products: [],
        total: 0,
      });
    
      const [registro, setRegistro] = useState(0);
    
      const [loading, setLoading] = useState(true);
      const [mensaje, setMensaje] = useState("");
    
      useEffect(()=>{    
        getAllProduct().then((respuesta)=>{
          console.log(respuesta);
          if (respuesta?.msg) {
            setMensaje(respuesta.msg);
          } else {
            setPosts({
              products: respuesta.producto,
              total: respuesta.total,
            });
          }
          setLoading(false);
        });
      }, [registro]);

  return (
    <>
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight"><h2>Lista de Productos:</h2></div>
        <div className="p-2 bd-highlight">
          <button type="button" className="btn btn-secondary" onclick="showUserCreateBox()">Nuevo Producto</button>
        </div>
      </div>
      
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Precio</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody id="mytable">

          {loading ? (
               <tr>
                <th scope="row" colspan="5"><div class="lds-ring"><div></div><div></div><div></div><div></div></div>Cargando...</th>
              </tr> 
              ) :
              (
                <>
            {posts.products.map((producto) => (
              <AdminTableRowProducts key={producto.id} producto={producto} />
            ))}
                </>
              )}
          </tbody>
        </table>
      </div>
      </>
  )
}

export default AdminProducts