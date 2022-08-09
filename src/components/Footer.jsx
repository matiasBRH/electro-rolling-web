import React from 'react'


const Footer = () => {

    return (
        <div className='main-footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        {/* columna 1 */}
                        <h4>Aca va el logo</h4>
                        <ul className=''>
                            <li>Hola 1</li>
                            <li>Hola 2</li>
                            <li>Hola 3</li>
                            <li>Hola 4</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        {/* columna 2 */}
                        <h4>Links</h4>
                        <ul className=''>
                            <li>Contacto</li>
                            <li>Hola 2</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        {/* columna 1 */}
                        <h4>Links</h4>
                        <ul className=''>
                            <li>Hola 1</li>
                            <li>Hola 2</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        {/* columna 1 */}
                        <h4>Redes, Contacto y QR</h4>
                        <ul className=''>
                            <li>Hola 1</li>
                            <li>Hola 2</li>
                            <li>Hola 3</li>
                        </ul>
                    </div>
                </div>
                {/* Copyright */}
                <div className="footer-copy">
                    <p className='text-center'>
                        &copy;{new Date().getFullYear} Todos los derechos reservados a los creadores. R-M-J-S
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
