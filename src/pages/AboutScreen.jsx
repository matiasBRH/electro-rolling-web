import React from 'react'
import about1 from "../assets/aboutus1.jpg"
import about2 from "../assets/aboutus2.jpg"
import about3 from "../assets/aboutus3.jpg"
import "../css/destacados.css"
import "../css/pantallaTotal.css"

const AboutScreen = () => {
  return (

    <div className="container alturaParaFooter">
      <div className="row">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={about1} className='d-block w-100' alt="1" />
            </div>
            <div className="carousel-item">
              <img src={about2} className="d-block w-100" alt="2" />
            </div>
            <div className="carousel-item">
              <img src={about3} className="d-block w-100" alt="3" />
            </div>
          </div> 
        </div>
      </div>
      <div className="row my-3">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="text-center">
            <h1 mt-5>¿Quiénes somos?</h1>
          </div>
          <hr />
          <div className="text-md-start mt-5">
            <p className='fst-italic'>
              Electro Rolling ofrece una gran variedad de productos electrodomésticos que puedes adquirir 
              a través de nuestra página. Somos tu lugar favorito a la hora de comprar una nueva adquisición para tu hogar y trabajo.
              Somos un pequeño grupo de estudiantes de Rolling Code School que a través de su aprendizaje, decidimos lanzar
              nuestra primera página de productos a la web. ¡Gracias por confiar en nosotros!
            </p>
          </div>
        </div>
          
        <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
          <hr/>
          <div className='text-center mt-5'>
            <p className='fst-italic'>
            "¡Electro Rolling te acompaña a tu mejor decisión!"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen