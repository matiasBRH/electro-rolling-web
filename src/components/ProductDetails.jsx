import React, { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom"
import NumberFormat from 'react-number-format';
import '../css/productDetails.css'
import '../css/cssEffects.css'

import { useParams } from "react-router-dom";
import { getProductById } from "../helpers/fetchApi";

const ProductDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    getProductById(id).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        setPost(respuesta.producto);
      }
      setLoading(false);
    });
  }, [id]);
  
  return (
   <main className="mt-5 pt-4">
    {loading ? (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="loader">Loading...</div>
          </div>
        </div>
      </div>
) :
(
    <>
    <div className="container container-breadcrumb animate__animated animate__fadeIn">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link className="nav-link" aria-current="page" to="/">Electro Rolling</Link></li>
              <li className="breadcrumb-item"><a href="#">{post.categoria}</a></li>
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
              <h2>{post.nombre}</h2>  
              <a href="">
                <span className="badge bg-success mr-1">{post.categoria}</span>
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
              <input type="number" value="1" aria-label="Search" className="form-control" style={{width: 100}}/>
              <button className="btn btn-primary btn-md my-0 p" type="submit">AGREGAR AL CARRO
                <i className="fas fa-shopping-cart ml-1"></i>
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

export default ProductDetails