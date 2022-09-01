import React from 'react'
import {Link} from "react-router-dom"
import "../css/pantallaTotal.css"

import "../css/error.css"

const ErrorScreen = () => {
  return (

    <div className='container-404 alturaParaFooter container mt-5 '>
      <h1>Error 404</h1>
      <p>Esta pagina no se encuentra disponible en estos momentos. Disculpa las molestias</p>
      <Link to="/" className='btn btn-warning'>Pagina principal</Link>
    </div>
  )
}

export default ErrorScreen