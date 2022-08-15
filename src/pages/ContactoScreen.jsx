import React, { useEffect } from 'react'
import "../css/destacados.css"

const Contacto = () => {


    return (
        <>
            <div class="container my-4 back-e">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6" id="fondo">
                        <h2> CONTACTO </h2>
                        <hr/>
                        <form>
                            <div class="mb-3">
                                <label for="ContactoNombre" class="form-label2">Nombre</label>
                                <input type="text" class="form-control" id="ContactoNombre" aria-describedby="emailHelp" placeholder="Ingrese su nombre" required/>
                            </div>
                            <div class="mb-3">
                                <label for="ContactoEmail" class="form-label2">Correo electrónico</label>
                                <input type="email" class="form-control" id="ContactoEmail" aria-describedby="emailHelp" placeholder="Ingrese su correo electrónico" required/>
                                <div id="emailHelp" class="form-text"> <i>No compartiremos tu correo electrónico con nadie más.</i></div>
                            </div>
                            <div class="mb-3">
                                <label for="ContactoMensaje" class="form-label2">Deja tu mensaje</label>
                                <textarea class="form-control" id="ContactoMensaje" rows="6" placeholder="Escriba su consulta"></textarea>                            
                            </div>
                            <div className="mb-3 md-2">
                            <button type="button" class="btn btn-light">Enviar</button>
                            <button type="reset" class="btn btn-light me-4 px-3">Limpiar
                            </button>
                            </div>
                        
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2> MÁS INFORMACIÓN</h2>
                        <hr/>
                        <ul>
                    <li><i class="fa fa-map-marker"></i> Argentina</li>
                    <li><i class="fa fa-phone"></i> (666) 666 666 666</li>
                    <li><i class="fa fa-envelope"></i> ElectroRolling@Website.com</li>
                </ul> 
                <hr />
                <p>Si tienes algun problema, no dudes en consultarnos o contactarte con nuestro servicio de telefonia!</p>
                <p>EvilGeniusMovies.com</p>
                <hr />
                <div className='md-6 col-lg-6'>
                    <h4>¡Nuestro WhatsApp</h4>
                    <a href="http://Whatsapp.com"><i class="fa fa-whatsapp fa-4x"></i></a>
                </div>
                    </div>
                  
                </div>
            </div>
        </>
        
    )
}

export default Contacto