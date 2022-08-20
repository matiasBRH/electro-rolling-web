import React from 'react'
import '../css/card.css'

const Card = (props) => {
  console.log(props)
  const {producto} = props
  return (
    <div className="col-6 col-md-6 col-lg-3">
    <div className="container d-flex justify-content-center">
    <figure className="card card-product card-product-grid card-lg"> <a href="#" className="img-wrap" data-abc="true"><img src={producto.img}></img></a>
        <figcaption className="info-wrap">
            <div className="row">
                <div className="col-md-9"> <a href="#" className="title" data-abc="true">{producto.nombre}</a> </div>
                <div className="col-md-3">
                    <div className="rating text-right"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                </div>
            </div>
        </figcaption>
        <div className="bottom-wrap"> <a href="#" className="btn btn-card-product btn-primary float-right" data-abc="true"> Agregar al Carro </a>
            <div className="price-wrap"> <span className="price h5">${producto.precio}</span> <br></br> <small className="text-success">Envío Gratis</small> </div>
        </div>
    </figure>
    </div>
    </div>
  )
}

export default Card