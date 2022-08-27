import React from 'react'
import CardDestacadas from './CardDestacadas';
import { listaProductos } from "../data/products";


import "../css/destacados.css"

const GridDestacados = (props) => {
    
    console.log(props)
    const {producto} = props

    return (

        <>
            <div className="mt-5 mb-5 ps-5 pe-5 text-center d-flex justify-content-center align-baseline flex-wrap">
                    {listaProductos.map((producto) => (
                        <CardDestacadas key={producto.id} producto={producto} />
                    ))}
            </div>
        </>
    )
}

export default GridDestacados
