import React from 'react'
import CardDestacadas from './CardDestacadas'
import {listaProductos} from "../data/products"

import bati from "../assets/batodira prod 1.jpg"
import "../css/destacados.css"

const Destacados = () => {

    return (

        <div className=''>
            <div id="carouselExampleSlidesOnly" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards-wrapper">
                            {listaProductos.map((producto) => (
                            <CardDestacadas key={producto.id} producto={producto} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destacados
