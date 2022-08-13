import React from 'react'
import "../css/destacados.css"

const CardDestacadas = (props) => {
    
    console.log(props)
    const {producto} = props

    return (

        <div class="card card-destacados text-center">
                <img src={producto.imagen} class="card-img-top" alt="producto"/>
                <div class="card-body">
                    <p class="card-title">{producto.nombre}</p>

                    <div className="price-wrap">
                        <span className="price h5">${producto.precio}</span> 
                    </div>
                    <hr />
                    
                    <div className="bottom-wrap"> <a href="#" className="btn btn-success float-right" data-abc="true">Ver mas</a>
                    </div>
                </div>
        </div>
    )
}

export default CardDestacadas
