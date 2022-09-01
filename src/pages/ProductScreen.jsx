import React, { useEffect, useState } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom"
import NumberFormat from 'react-number-format';
import { useParams } from "react-router-dom";
import { getProductById } from "../helpers/fetchApi";

import '../css/productDetails.css'
import '../css/cssEffects.css'
import '../css/loaderProducto.css'
import "../css/pantallaTotal.css"


const ProductScreen = () => {
  // let tarea = document.getElementById("text_tarea");
// carrito.push(tarea.value);
// localStorage.setItem("carrito", JSON.stringify(carrito));


  

const { id } = useParams();
const [post, setPost] = useState({});
const [loading, setLoading] = useState(true);
const [mensaje, setMensaje] = useState("");
const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favoritos")) || [])
const navigate = useNavigate();


useEffect(() => {
  getProductById(id).then((respuesta) => {
    console.log(respuesta);
    if (respuesta.errors) {      
      // setMensaje(respuesta.errors[0].msg);      
      navigate(`/404`);
    } else {
      setPost(respuesta.producto);
    }
    setLoading(false);
  }).catch((respuesta)=>{
    
  });
}, [id]);

const agregarCarrito=()=>{
 
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  console.log(carrito)
  let arrayID=0
  if (carrito.length==0){      
     arrayID = 0
  } else {
      arrayID = carrito[carrito.length - 1].id + 1;
  }
  
  let newProduct = {
    "id": arrayID,
    "productID": id,
    "precio": post.precio
  };
  let cantidad = document.getElementById("itemCant").value
  for (let index = 0; index < cantidad; index++) {
    carrito.push(newProduct);
    
  }
  
  localStorage.setItem("carrito", JSON.stringify(carrito));
  navigate(`/cart`);
}

const agregarFavorito=()=>{
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  let arrayID=0
  if (favoritos.length==0){      
     arrayID = 0
  } else {
      arrayID = favoritos[favoritos.length - 1].id + 1;
  }
  
  let newProduct = {
    "id": arrayID,
    "productID": id
  };  
  favoritos.push(newProduct);        
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

  return (

    <main className="mt-5 alturaParaFooter">
    {loading ? (
      <div className="div div-animation">


      <div className="divSpinner" id="containerSpinner">
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
              floodColor="#fc6767"/>
          </filter>
        </defs>
        <circle id="spinner" cx="50" cy="50" r="45"/>
    </svg>
    </div>
    </div>
      ) : mensaje ? (
        <div className="col-12 col-md-6 offset-md-3">
          <div className="alert alert-danger" role="alert">
            {mensaje}
          </div>
          <Link className="btn btn-primary" to="/login">
            Volver
          </Link>
        </div>
      ) : (
    <>
    <div className="container container-breadcrumb animate__animated animate__fadeIn">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link className="text-black" aria-current="page" to="/">HOME</Link></li>
              <li className="breadcrumb-item"><Link className="text-black" to={`/category/${post.categoria.toLowerCase()}`}>{post.categoria}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{post.nombre}</li>
            </ol>
          </nav>
        </div>

    <div className="container dark-grey-text mt-5 animate__animated animate__fadeIn">        
      <div className="row wow fadeIn">
        <div className="col-md-6 mb-4 product-img-container pt-4 pb-4 card-details">
          <img src={post.img} className="img-fluid" alt=""/>
        </div>
        <div className="col-md-6 mb-4">    
          <div className="p-4">
            <div className="mb-3">
              <h2>{post.nombre}<button className="btn btn-danger"></button></h2>  
              <a href="">
                <span className="badge bg-success mr-1"><Link className="text-decoration-none link-unstyled text-white" to={`/category/${post.categoria.toLowerCase()}`}>{post.categoria}</Link></span>
              </a>
              <a href="">
                <span className="badge bg-primary mr-1">NUEVO</span>
              </a>
              <h3 className="mt-2">
                <a href=""><img className="product-img-logo" src="https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-5.png" alt="logo"/></a></h3>              
            </div>

            <p className="lead font-weight-bold text-danger">             
              <span className="price"><NumberFormat value={post.precio} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={'2'} fixedDecimalScale={true} prefix={'$'} /></span>
            </p>

            <p className="lead font-weight-bold">Descripción</p>
            
            <hr/>

            <p>{post.detalle}</p>

            <form className="d-flex justify-content-left">
              <input id="itemCant" type="number" defaultValue="1" min="1" aria-label="Search" className="form-control" style={{width: 100}}/>
              <button className="btn btn-primary btn-md my-0 p"  onClick={agregarCarrito} type="submit">AGREGAR AL CARRO
                <div class='large-font text-center top-20' onClick={agregarFavorito}>
                <ion-icon name="heart">
                <div class='red-bg'></div>
                </ion-icon>
              </div>
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
    </>
    )}
  </main>
  )
}

export default ProductScreen