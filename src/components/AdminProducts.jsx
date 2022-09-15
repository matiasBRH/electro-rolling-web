import React, { useEffect, useState } from "react";
import AdminTableRowProducts from '../components/AdminTableRowProducts';
import { getProduct, deleteProduct } from '../helpers/fetchApi';
import NuevoProducto from "../components/NuevoProducto"
import EditarProducto from "./EditarProducto";

const AdminProducts = () => {

    const [posts, setPosts] = useState({
        products: [],
        total: 0,
      });
    
      // const [registro, setRegistro] = useState(0);
    
      const [loading, setLoading] = useState(true);
      const [mensaje, setMensaje] = useState("");
      const [refresh, setRefresh] = useState(0)
      const [datos, setDatos] = useState(null)
      

      const registro = 0;  
      const limite = 200;  
    
      
      useEffect(()=>{    
        getProduct(registro, limite).then((respuesta)=>{
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
      }, [refresh]);

      // Seccion para abrir modal de Nuevo producto
      const [show, setShow] = useState(false);
      const [showE, setShowE] = useState(false);

      const handleShow = () => setShow(true);
      const handleShowE = (producto) => {        
        console.log(producto)
        setDatos(producto)
        setShowE(true);
        console.log(showE)
      }
      const handleClose = () => {
        setShow(false);
        setRefresh(refresh+1) 
      }
      const handleCloseE = () => {
        setShowE(false);
        setRefresh(refresh+1) 
      }

      const inactivarProducto = (id) => {
        
        if (confirm('Está seguro de que desea desactivar el producto?')) {
          deleteProduct(id).then((respuesta)=>{
            console.log(respuesta);
            if (respuesta?.msg) {
              console.log(registro)
              setRefresh(refresh+1)
              alert("Producto desactivado con exito.");
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
               
            } else {
              console.log(registro)
              
            }
            
          });
        } else {
        
        }

       
     };


  return (
    <>
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight"><h2>Lista de Productos:</h2></div>
        <div className="p-2 bd-highlight">
          <button type="button" className="btn btn-success" onClick={handleShow}>Nuevo Producto</button>
        </div>
      </div>
      {/*modal para agregar*/}
      <NuevoProducto show={show} handleClose={handleClose} />
      {showE && (
        <EditarProducto show={showE} handleClose={handleCloseE} datos={datos} />
      )}
      
      
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
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
                <th scope="row" colSpan="5"><div className="lds-ring"><div></div><div></div><div></div><div></div></div>Cargando...</th>
              </tr> 
              ) :
              (
                <>
            {posts.products.map((producto, index) => (
              <AdminTableRowProducts key={producto._id} producto={producto} index={index} inactivarProducto={inactivarProducto} handleShowE={handleShowE}/>
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