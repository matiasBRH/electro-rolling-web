import React, { useEffect, useState } from "react";
import CardDestacadas from './CardDestacadas';
import { getProduct } from "../helpers/fetchApi";

import "../css/destacados.css"

const GridDestacados = () => {

    const [posts, setPosts] = useState([])
    const registro = 0;
    const limite = 10;  

    const [listaDestacados, setListaDestacados] = useState([])
    
    useEffect(()=>{
        getProduct(registro, limite, true ).then((respuesta)=>{
            setPosts(respuesta.producto)
        });
    }, []);


    return (

        <>          
            
            <div className="row mb-5 mt-3">
                    {posts.map((producto) => (
                        <CardDestacadas key={producto._id} producto={producto} />
                    ))}
            </div>
        </>
    )
}

export default GridDestacados
