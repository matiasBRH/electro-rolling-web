import React from 'react'
import "../css/destacados.css"

const AboutScreen = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12 col-md mb-2">
          <h1>¿Quiénes somos?</h1>
          <hr />
          <p mt-5>
            Electro Rolling ofrece una gran variedad de productos electrodomésticos que puedes adquirir 
            a través de nuestra página. Somos tu lugar favorito a la hora de comprar una nueva adquisición para tu hogar y trabajo.
            Somos un pequeño grupo de estudiantes de Rolling Code School quue a tráves de su aprendizaje, decidimos lanzar
            nuestra primera página de productos a la web. ¡Gracias por confiar en nosotros!
          </p>
          <div className='text-center'>
            "¡Electro Rolling te acompaña a tu mejor decisión!"
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen