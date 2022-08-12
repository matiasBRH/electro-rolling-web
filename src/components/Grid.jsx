import React from "react";
import Card from "./Card";
import { listaProductos } from "../data/products";

console.log(listaProductos);

const Grid = () => {
    return (
        <div className="container">

                <div className="col-10 col-md-10">               
                    <div className="row">
                        {listaProductos.map((producto) => (
                        <Card key={producto.id} producto={producto} />
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Grid;
