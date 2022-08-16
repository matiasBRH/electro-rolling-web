import React from 'react'

import "../css/card.css"
import '../css/destacados.css'

const CardDestacadas = (props) => {

    console.log(props)

    const {producto} = props

    return (
            
        <div className="card m-1 ms-1 destacadas">
            <img src={producto.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{producto.nombre}</h6>
                <a href="#" className="btn btn-success">Ver producto</a>
            </div>
        </div>

    )
}

export default CardDestacadas