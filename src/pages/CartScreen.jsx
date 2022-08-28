import React from 'react'
import {NavLink} from "react-router-dom"
import { listaProductos } from "../data/products";
import TablaCart from '../components/TablaCart';
import "../css/cartScreen.css"

const CartScreen = () => {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Mi carrito 🛒</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container mainCarrito">
        <div className="row">        
          <div className='listado col-12 col-md-8 col-lg-8'>
              {listaProductos.map((producto) => (
                <TablaCart key={producto.id} producto={producto} />
                ))}
          </div>

          <div className="sumador card p-2 h-50 mb-3 col-6 col-md-3 col-lg-3">

              <div className="subTotal">
                  <h6 className="text-muted mb-1">Subtotal</h6>
                  <h6 className='text-muted precio'>$</h6>
              </div>

              <div className="total">
                  <h5 className="mb-1">Total</h5>
                  <h5 className='precio'>$</h5>
              </div>

              <div className="mt-2 envio d-flex justify-content-start align-bottom">

                <input type="text" className='form-control me-2 w-25' placeholder='C.P' required />
                <NavLink to="/*" className="btn btn-warning me-2" >Calcular envio</NavLink>
              </div>

              <hr />
              <div className="botones">
                <button className='btn btn-success'>Pagar</button>
                <button className='btn btn-danger'>Cancelar</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartScreen