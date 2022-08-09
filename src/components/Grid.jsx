import React from "react";
import Card from "./Card";
import { listaProductos } from "../data/products";

console.log(listaProductos);

const Grid = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        {/* <h1 className="text-center">Bienvenido al Blog!</h1>
        <hr /> */}
        <div className="col-10 col-md-10">
          
          <div className="row">
            {listaProductos.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
