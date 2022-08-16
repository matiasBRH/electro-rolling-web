import React from 'react'
import '../css/productDetails.css'

const ProductDetails = () => {
  return (
   <main className="mt-5 pt-4">
    
    <div className="container container-breadcrumb">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Electro Rolling</a></li>
              <li className="breadcrumb-item"><a href="#">Celulares</a></li>
              <li className="breadcrumb-item active" aria-current="page">CELULAR SAMSUNG S22 / SM-S901E VERDE</li>
            </ol>
          </nav>
        </div>

    <div className="container dark-grey-text mt-5">        

      <div className="row wow fadeIn">

        <div className="col-md-6 mb-4 product-img-container pt-4 pb-4">

          <img src="http://medias.musimundo.com/medias/00510018-145440-145440-01-145440-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w4MjEyMHxpbWFnZS9qcGVnfGg1YS9oMmQvMTAzODE1ODIyNzA0OTQvMDA1MTAwMTgtMTQ1NDQwLTE0NTQ0MF8wMS0xNDU0NDBfMDEuanBnX3NpemU1MTV8YjE1YzNhN2UzMThjZTJlYWJkY2QwMzBmNjZmMTU5ZjVmZjQ1NDIxMzQ4ZTc2ZTUyMmU1OGVlMjczNTMzMTA0NQ" className="img-fluid" alt=""/>

        </div>
        <div className="col-md-6 mb-4">

      
          <div className="p-4">

            <div className="mb-3">
              <h2>CELULAR SAMSUNG S22 / SM-S901E VERDE</h2>  
              <a href="">
                <span className="badge bg-success mr-1">CELULARES</span>
              </a>
              <a href="">
                <span className="badge bg-primary mr-1">NUEVO</span>
              </a>
              <h3 className="mt-2">
                <a href=""><img className="product-img-logo" src="https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-5.png" alt="logo"/></a></h3>              
            </div>

            <p className="lead font-weight-bold text-danger">             
              <span class="price">$215.999,00</span>
            </p>

            <p className="lead font-weight-bold">Descripción</p>
            <hr/>

            <p>La inspiración no espera una iluminación óptima y ahora tampoco tenés que hacerlo. El mayor salto en nuestra tecnología de video, la velocidad de fotogramas automática coincide con la velocidad de fps de tu entorno y Super Night Solution elimina el ruido en cada fotograma para obtener imágenes vívidas de alta calidad, ya sea que estés bajo el sol o bajo las estrellas.</p>

            <form className="d-flex justify-content-left">
              <input type="number" value="1" aria-label="Search" className="form-control" style={{width: 100}}/>
              <button className="btn btn-primary btn-md my-0 p" type="submit">AGREGAR AL CARRO
                <i className="fas fa-shopping-cart ml-1"></i>
              </button>

            </form>

          </div>

        </div>

      </div>


     
     

    </div>
  </main>
  )
}

export default ProductDetails