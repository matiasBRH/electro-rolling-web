import React from 'react'
import { Link } from "react-router-dom";
import "../css/card.css"
import '../css/destacados.css'

const CardDestacadas = (props) => {

    console.log(props)

    const {producto} = props

    return (
            
        <div className="card m-1 ms-1 destacadas">
            <img src={producto.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title-destacadas">{producto.nombre}</h6>
                <Link to={`/productos/${producto._id}`} className="btn btn-card-product btn-success float-right img-wrap" data-abc="true">Ver producto</Link>
            </div>
        </div>

    )
}

export default CardDestacadas