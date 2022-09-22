import React from 'react'
import {Link} from "react-router-dom"
import "../css/pantallaTotal.css"
import "../css/error.css"

import constructionGif from "../assets/under-construction-gif-11.gif"

const ContructionScreen = () => {
  
  return (

    <div className='container-404 alturaParaFooter container mt-5 '>
      <img src={constructionGif} alt="En construcción" />
      <div className="row">
      <div className="col text-center">
      <p>Esta pagina no se encuentra disponible en estos momentos. Disculpa las molestias</p>
      <Link to="/" className='btn btn-warning'>Pagina principal</Link>
      </div>
      
      </div>
   
    </div>

  )
}

export default ContructionScreen