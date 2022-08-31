import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom"
import TablaCart from '../components/TablaCart';

const CartScreen = () => {

  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    carrito.forEach((element) => {
      
      setTotal(total+parseFloat(element.precio))   
      console.log(total)   
    });
    testing()    
  }, [carrito]);

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
    
  };


  const agregarProdCarrito =()=>{
    let arrayID=0
    if (carrito.length==0){      
        arrayID = 0
    } else {
        arrayID = carrito[carrito.length - 1].id + 1;
    } 
    
    let newProduct = {
      "id": arrayID,
      "productID": "62fc443baacdf236b060ca9e"
    };
    setCarrito([...carrito, newProduct]);
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
                <button className='btn btn-success'>Pagar</button>
                <button className='btn btn-danger'>Cancelar</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen