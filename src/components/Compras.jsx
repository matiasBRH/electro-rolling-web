import React, { useEffect, useState } from "react";
import AdminTableRowPurchases from '../components/AdminTableRowPurchases';
import { getPurchase } from '../helpers/fetchApi';

const Compras = () => {
    
    const [posts, setPosts] = useState({
        products: [],
        total: 0,
      });
    
      
    
      const [loading, setLoading] = useState(true);
      const [mensaje, setMensaje] = useState("");
    
      useEffect(()=>{    
        getPurchase().then((respuesta)=>{
          console.log(respuesta);
          if (respuesta?.msg) {
            setMensaje(respuesta.msg);
          } else {
            setPosts({
              products: respuesta.compras,
              total: respuesta.total,
            });
          }
          setLoading(false);
        });
      }, []);

      
  return (
    <>
    <div className="d-flex bd-highlight mb-3">
    <div className="me-auto p-2 bd-highlight"><h2>Lista de Compras:</h2></div>
   
  </div>
  
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>      
          <th scope="col">#</th>        
          <th scope="col">Fecha</th>
          <th scope="col"># de Productos</th>
          <th scope="col">Usuario</th>          
          <th scope="col">Email</th>          
        </tr>
      </thead>
      <tbody id="mytable">

      {loading ? (
        <tr>
        <th scope="row" colSpan="5"><div className="lds-ring"><div></div><div></div><div></div><div></div></div>Cargando...</th>
      </tr> 
        ) :
        (
        <>
        {console.log(posts.products)}
        {posts.products.map((compra,index) => (
          
          <AdminTableRowPurchases key={compra._id} compra={compra} index={index} />
        ))}
        </>
        )}
      </tbody>
    </table>
  </div>
  </>
  )
}

export default Compras