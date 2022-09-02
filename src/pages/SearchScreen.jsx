import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom"
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { buscarProducto } from "../helpers/fetchApi";
import BtnPaginacion from "../components/BtnPaginacion";
import '../css/sidebar.css'
import '../css/grid.css'
import "../css/pantallaTotal.css"

const SearchScreen = () => {
//     console.log(useParams().id)
//   const [id, setId] = useState(useParams().id) 
const {termino} = useParams()

const [posts, setPosts] = useState({
  products: [],
  total: 0,
});
let datos = {};

const [registro, setRegistro] = useState(0);
const limite = 8;

const [loading, setLoading] = useState(true);
const [mensaje, setMensaje] = useState("");

const [productos, setProductos] = useState([]);

useEffect(() => {
  buscarProducto(termino, registro, limite).then((respuesta) => {
    console.log(respuesta);
    if (respuesta?.msg) {
      setMensaje(respuesta.msg);
    } else {
      setPosts({
        products: respuesta.results,
        total: respuesta.total,
      });
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    setLoading(false);
  });
}, [termino, registro]);

useEffect(() => {
  setRegistro(0)
}, [termino])


const nextPage = () => {
  if (posts.total - registro > 8) {
    console.log("OK");
    setRegistro(registro + 8);
  }
};

const prevPage = () => {
  if (registro > 0) {
    console.log("OK");
    setRegistro(registro - 8);
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
  <>
    {/* <div class="sidebar">
      <h4>CATEGORIAS</h4>
      <NavLink className="nav-link" to="/category/televisores" >Televisores</NavLink>
      <NavLink className="nav-link" to="/category/celulares" >Celulares</NavLink>    
      <NavLink to="/category/notebooks" className="nav-link">Notebooks</NavLink>
      <NavLink to="/category/tablets" className="nav-link" >Tablets</NavLink>
    </div> */}
  <div className="container">
    <div className="row">
      
     
      

      {loading ? (
 <div className="div div-animation">


 <div className="divSpinner" id="containerSpinner">
 <svg viewBox="0 0 100 100">
   <defs>
     <filter id="shadow">
       <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
         floodColor="#fc6767"/>
     </filter>
   </defs>
   <circle id="spinner" cx="50" cy="50" r="45"/>
</svg>
</div>
</div>
) :
(
      <div className="col mt-4">
        
        <h3>Resultados de la búsqueda: "{termino}"</h3>
        <h4>Se encontraron {posts.total} resultados</h4>
        <hr />

        {posts.total > 0 ? (


          <>
        <div className="row">
          {posts.products.map((producto) => (
            <Card key={producto._id} producto={producto} />
          ))}
        </div>
        <BtnPaginacion
              registro={registro}
              total={posts.total}
              nextPage={nextPage}
              prevPage={prevPage}
            />

          </>

            ) : (
              <span className="text-muted">No se encontraron registros</span>
          )}

      </div>
)}
      

    </div>
    <button onClick={topFunction} id="myBtn" title="Ir arriba">Top</button>
  </div>
  </>
);
};

export default SearchScreen