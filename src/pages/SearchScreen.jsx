import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import CardDestacadas from '../components/CardDestacadas';
import { listaProductos } from "../data/products";

const SearchScreen = () => {
  
  const { termino } = useParams();
  const [producto, setProducto] = useState([]);

  console.log(termino);

  useEffect(() => {

    buscarProd(termino).then((respuesta) => {
      console.log(respuesta.results);
      setProducto(respuesta.results);
    });
  }, [termino]);

  return (

    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <h3>Resultados de la búsqueda: "{termino}"</h3>
          <hr />
          {producto.length > 0 ? (
            listaProductos.map((post) => <CardDestacadas post={post} key={post._id} />)
          ) : (
            <span className="text-muted">No se encontraron registros</span>
          )}
          {/* 
          {blogs.map((post) => (
            <Post post={post} key={post._id} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default SearchScreen