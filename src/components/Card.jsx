import React from 'react'
import '../css/card.css'

const Card = (props) => {

    console.log(props)

    const {producto} = props

    return (
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <figure className="card card-product-grid"> <a href="#" className="img-wrap" data-abc="true">
                            <img src={producto.imagen}></img></a>
                            <figcaption className="info-wrap">
                                <div className="col-md-9"> <a href="#" className="title" data-abc="true">{producto.nombre}</a>
                                </div>
                            </figcaption>
                            <div className="bottom-wrap"> <a href="#" className="btn btn-primary float-right" data-abc="true"> Buy now </a>
                                <div className="price-wrap"> <span className="price h5">${producto.precio}</span> <br></br> <small className="text-success">Free shipping</small>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>

    )
}

export default Card