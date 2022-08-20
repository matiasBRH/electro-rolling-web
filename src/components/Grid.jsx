import React, { useEffect, useState } from "react";
import Card from "./Card";
// import { listaProductos } from "../data/products";
import { getProduct } from "../helpers/fetchApp";
import BtnPaginacion from "./BtnPaginacion";

// console.log(listaProductos);

const Grid = () => {
  const [posts, setPosts] = useState({
    products: [],
    total: 0,
  });

  const [registro, setRegistro] = useState(0);

  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");
  useEffect(()=>{
    getProduct(registro).then((respuesta)=>{
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        setPosts({
          products: respuesta.producto,
          total: respuesta.total,
        });
      }
      setLoading(false);
    });
  }, [registro]);

  const nextPage = () => {
    if (posts.total - registro > 10) {
      console.log("OK");
      setRegistro(registro + 10);
    }
  };

  const prevPage = () => {
    if (registro > 0) {
      console.log("OK");
      setRegistro(registro - 10);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div> 
        <div className="col-10 col-md-10">

          <div className="row">
            {posts.products.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))}
          </div>
          <BtnPaginacion
                registro={registro}
                total={posts.total}
                nextPage={nextPage}
                prevPage={prevPage}
              />
        </div>
      </div>
    </div>
  );
};

export default Grid;
