import React, { useEffect, useState } from "react";
import CardDestacadas from './CardDestacadas';
import { getProduct } from "../helpers/fetchApi";

import "../css/destacados.css"

const GridDestacados = () => {

    const registro = 0;
    const limite = 500;  

    const [listaDestacados, setListaDestacados] = useState([])
    
    useEffect(()=>{
        getProduct(registro, limite).then((respuesta)=>{
          let listaDestacadosTemp=respuesta.producto
          listaDestacadosTemp = listaDestacadosTemp.reverse().slice(0, 10);
          
          console.log(respuesta);
          setListaDestacados([...listaDestacadosTemp])
          console.log(listaDestacados)
        });
      }, []);


    return (

        <>          
            
            <div className="row mb-5 mt-3">
                    {listaDestacados.map((producto) => (
                        <CardDestacadas key={producto.id} producto={producto} />
                    ))}
           </div>
        </>
    )
}

export default GridDestacados
