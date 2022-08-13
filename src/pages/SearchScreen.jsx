import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Card from "../components/Card"
import { buscarProducto } from "../helpers/fetchApp";

const SearchScreen = () => {
  
  const { termino } = useParams();
  const [producto, setBlogs] = useState([]);

  console.log(termino);

  useEffect(() => {
    buscarBlog(termino).then((respuesta) => {
      console.log(respuesta.results);
      setBlogs(respuesta.results);
    });
  }, [termino]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <h3>Resultados de la búsqueda: "{termino}"</h3>
          <hr />
          {producto.length > 0 ? (
            producto.map((post) => <Post post={post} key={post._id} />)
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