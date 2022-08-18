import React from 'react'
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
                                <input type="text" class="form-control" id="ContactoNombre" aria-describedby="emailHelp" placeholder="Nostradamus"/>
                            </div>
                            <div class="mb-3">
                                <label for="ContactoEmail" class="form-label2">Correo electrónico</label>
                                <input type="email" class="form-control" id="ContactoEmail" aria-describedby="emailHelp" placeholder="nostradamus@centurias.com"/>
                                <div id="emailHelp" class="form-text"> <i>No compartiremos tu correo electrónico con nadie más.</i></div>
                            </div>
                            <div class="mb-3">
                                <label for="ContactoMensaje" class="form-label2">Deja tu mensaje</label>
                                <textarea class="form-control" id="ContactoMensaje" rows="6" placeholder="Escribe tu consulta"></textarea>                            
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2> UBICACION </h2>
                        <hr/>
                        <h3>No se me ocurre que mas podriamos poner aca pero algo mas seguro ajaja....Capaz el logo de wp para que abra lo del chat</h3>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Contacto