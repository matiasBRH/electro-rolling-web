import React from 'react'
import ProductTableRow from '../components/productTableRow';
import { listaProductos } from "../data/products";

const AdminScreen = () => {
  return (
   
    <div className="container">
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight"><h2>Lista de Productos:</h2></div>
        <div className="p-2 bd-highlight">
          <button type="button" className="btn btn-secondary" onclick="showUserCreateBox()">Create</button>
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
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody id="mytable">
            {/* <tr>
              <th scope="row" colspan="5">Cargando...</th>
            </tr> */}
            {listaProductos.map((producto) => (
              <ProductTableRow key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default AdminScreen