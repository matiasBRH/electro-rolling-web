import React from 'react'
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import '../css/card.css'

const Card = (props) => {
  console.log(props)
  const {producto} = props
  return (
    <div className="col-12 col-md-6 col-lg-3 animate__animated animate__fadeIn">
    <div className="container d-flex justify-content-center">
    <figure className="card card-product card-product-grid card-lg"><Link to={`/productos/${producto._id}`} className="img-wrap" data-abc="true"><img src={producto.img}></img></Link>
        <figcaption className="info-wrap">
            <div className="row">
                <div className="col-md-9"> <a href="#" className="title card-title" data-abc="true">{producto.nombre}</a> </div>
                <div className="col-md-3">
                    <div className="rating text-right"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                </div>
            </div>
        </figcaption>
        <div className="bottom-wrap"> <Link className="btn btn-card-product btn-primary float-right" data-abc="true" to={`/productos/${producto._id}`}> Ver Info </Link>
            <div className="price-wrap"> <span className="price h5"><NumberFormat value={producto.precio} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={'2'} fixedDecimalScale={true} prefix={'$'} /></span> <br></br> <small className="text-success">Envío Gratis</small> </div>
        </div>
    </figure>
    </div>
    </div>
  )
}

export default Card