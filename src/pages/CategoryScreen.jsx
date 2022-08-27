import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import CardDestacadas from "../components/CardDestacadas"

const CategoryScreen = () => {



    const {id} = useParams()
    let datos={}



    const { termino } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {

        prodSearch(termino).then((respuesta) => {
            console.log(respuesta.results);
            setProductos(respuesta.results);
        });

    }, [termino]);

    return (

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                <h3>Resultados de la búsqueda: "{termino}"</h3>
                <hr />
                {productos.length > 0 ? (
                    productos.map((post) => <CardDestacadas post={post} key={post._id} />)
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
        // <div className='container'>
        //     <div className="mt-5 mb-5 ps-5 pe-5 text-center d-flex justify-content-center align-baseline flex-wrap">
        //             {listaProductos.map((producto) => (
        //                 <CardDestacadas key={producto.id} producto={producto} />
        //             ))}
        //     </div>
        // </div>
    )
}

export default CategoryScreen