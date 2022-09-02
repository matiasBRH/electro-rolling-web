import React, { useEffect, useState } from "react";
import {NavLink, useNavigate} from "react-router-dom"
import TablaFavs from '../components/TablaFavs';
import NumberFormat from 'react-number-format';
import PurchaseConfirm from '../components/PurchaseConfirm';
import { postCompras } from "../helpers/fetchApi";
import "../css/pantallaTotal.css"


const FavoritosScreen = () => {
  
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("favoritos")) || [])
  const [total, setTotal] = useState(0)
  const [refresh, setRefresh] = useState(0)
  const [botonComprar, setBotonComprar] = useState(false)
  const [productos, setProductos] = useState([]);
  const [body, setBody] = useState("");
  const [mensaje, setMensaje] = useState([]);
  const [thanks, setThanks] = useState(false)
  const navigate = useNavigate();
  
  

  useEffect(()=>{    
   
    

  }, []);



    
    
    


  return (
    <>
    {thanks ? (
      <PurchaseConfirm/>
      ) : (
        <div className="alturaParaFooter">
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h1>Favoritos</h1>
              <hr />
            </div>
          </div>
        </div>
  
        <div className="container mainCarrito">
          <div className="row">        
            <div className='listado col-12 col-md-8 col-lg-8'>

            {carrito.length==0 ? (
              <h2>No tienes productos favoritos</h2>
              ) : (
                carrito.map((producto, index) => (
                  <TablaFavs key={index} producto={producto}  />
                  ))
                )}
              
            </div>
  
         
          </div>
        </div>
      </div>
     )}
</>
    
  )
}

export default FavoritosScreen