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
    <figure className="card card-product card-product-grid card-lg "><Link to={`/productos/${producto._id}`} className="img-wrap" data-abc="true"><img src={producto.img}></img></Link>
        <figcaption className="info-wrap">
            <div className="row">
                <div className="col-md-9 "><h6><Link to={`/productos/${producto._id}`} className="" data-abc="true">{producto.nombre}</Link> </h6> </div>               
            </div>
        </figcaption>
        <div className="bottom-wrap text-center"> <Link className="btn btn-card-product btn-primary float-right" data-abc="true" to={`/productos/${producto._id}`}> Ver Info </Link>
            <div className="price-wrap mt-3"> <span className="price h5"><NumberFormat value={producto.precio} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={'2'} fixedDecimalScale={true} prefix={'$'} /></span> <br></br> <small className="text-success">Envío Gratis</small> </div>
        </div>
    </figure>
    </div>
    </div>
  )
}

export default Card