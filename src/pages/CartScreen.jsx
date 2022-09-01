import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom"
import TablaCart from '../components/TablaCart';

const CartScreen = () => {

  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])
  const [total, setTotal] = useState(0)
  const [refresh, setRefresh] = useState(0)
  const [botonComprar, setBotonComprar] = useState(false)

  useEffect(()=>{
    carrito.forEach((element) => {      
      setTotal(total+parseFloat(element.precio))   
      console.log(total)   
    });
    testing()    
    if (carrito.length==0){            
      setBotonComprar(false)      
  } else {          
      setBotonComprar(true)
  }

  }, [refresh]);

  const testing =()=>{
    console.log(total)
  }

  const deleteCart = (id) => {    
      console.log(id);
      let carritoTemp=carrito
      carritoTemp.splice(id, 1);
      setCarrito([...carritoTemp])
      console.log(carrito)
      localStorage.setItem("carrito", JSON.stringify(carrito));
      // juegos.splice(index, 1);
      setRefresh(refresh+1)    
  };


  const realizarCompra=()=>{

  }

  return (

    <div className="alturaParaFooter">
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
              {carrito.map((producto, index) => (
                <TablaCart key={index} index={index} producto={producto} deleteCart={deleteCart} />
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
              {botonComprar
              ? <button className='btn btn-success' onClick={realizarCompra}>Comprar</button>
              : <button className='btn btn-success ' disabled >Comprar</button>
              }

               
                <button className='btn btn-danger'>Vaciar Carrito</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen