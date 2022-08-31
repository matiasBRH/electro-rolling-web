import React, { useEffect, useState } from "react";
import AdminProducts from "../components/AdminProducts";
import AdminUsers from "../components/AdminUsers";
import '../css/cssEffects.css'


// import { listaProductos } from "../data/products";

const AdminScreen = () => {
  const [adminProducts, setAdminProducts] = useState(true)
  
  
  return (
    <div className="container">
      <button className="btn btn-success mt-3 mb-3" onClick={()=>setAdminProducts(true)}>Administrar Productos</button>
      <button className="btn btn-success mt-3 mb-3 ms-3" onClick={()=>setAdminProducts(false)}>Administrar Usuarios</button>
      {
        adminProducts ?
        (
          <AdminProducts/>
        ):
        (
          <AdminUsers/>
        )
      }
    </div>

  )
}

export default AdminScreen