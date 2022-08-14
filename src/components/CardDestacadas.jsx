import React from 'react'

import '../css/destacados.css'

const CardDestacadas = (props) => {

    console.log(props)

    const {producto} = props

    return (
            
        <div className="card h-25 w-25 m-1">
            <img src={producto.imagen} className="card-img-top img-card" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{producto.nombre}</h6>
                <a href="#" className="btn btn-success float-end">Ver producto</a>
            </div>
        </div>

    )
}

export default CardDestacadas