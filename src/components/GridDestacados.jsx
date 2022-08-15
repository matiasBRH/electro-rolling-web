import React from 'react'
import CardDestacadas from './CardDestacadas';
import { listaProductos } from "../data/products";


import "../css/destacados.css"

const GridDestacados = (props) => {
    
    console.log(props)
    const {producto} = props

    return (

        <>
            <div className="mt-5 text-center">
                <div className="row">
                    {listaProductos.map((producto) => (
                        <CardDestacadas key={producto.id} producto={producto} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default GridDestacados