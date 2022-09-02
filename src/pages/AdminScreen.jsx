import React, { useEffect, useState } from "react";
import AdminProducts from "../components/AdminProducts";
import AdminUsers from "../components/AdminUsers";
import Compras from "../components/Compras";
import '../css/cssEffects.css'



// import { listaProductos } from "../data/products";

const AdminScreen = () => {
  const [adminProducts, setAdminProducts] = useState(0)
  
  
  return (
    <div className="container alturaParaFooter">
      <button className="btn btn-success mt-3 mb-3" onClick={()=>setAdminProducts(0)}>Administrar Productos</button>
      <button className="btn btn-success mt-3 mb-3 ms-3" onClick={()=>setAdminProducts(1)}>Administrar Usuarios</button>
      <button className="btn btn-success mt-3 mb-3 ms-3" onClick={()=>setAdminProducts(2)}>Ver Compras</button>
      {
        adminProducts==0 ?
        (
          <AdminProducts/>
        ): adminProducts==1 ?
        (
          <AdminUsers/>
        ):(
          <Compras/>
        )
      }
    </div>

  )
}

export default AdminScreen