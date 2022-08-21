import React, { useEffect, useState } from "react";
import Card from "./Card";
// import { listaProductos } from "../data/products";
import { getProduct } from "../helpers/fetchApp";
import BtnPaginacion from "./BtnPaginacion";

// console.log(listaProductos);

const GridTodos = () => {
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
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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


  //Get the button:


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

 const scrollFunction=()=> {
  const mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
 const topFunction=()=>{  
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
      <button onClick={topFunction} id="myBtn" title="Ir arriba">Top</button>
    </div>
    
  );
};

export default GridTodos;
