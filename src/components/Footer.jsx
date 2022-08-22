import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../assets/logo.png"
import qr from "../assets/data_fiscal.png"
import "../css/footer.css"


const Footer = () => {

    return (

            <div className="footer navbar-dark bg-dark text-white">
                <div className="row">
                    <div className="footer-col col d-flex justify-content-around align-items-center">
                        {/* columna 1 */}
                        <div className="logo">
                            <img className="img-logo-footer" src={logo} alt="logo" />
                        </div>
                        {/* columna 2 */}
                        <div className="col-links">
                            <ul>
                                <li><h5>Mas de nosotros</h5></li>
                                <li><NavLink className="text-white text-decoration-none" to="/about"><i class="fa fa-users" aria-hidden="true"></i> Sobre nosotros </NavLink></li>
                                <li><NavLink className="text-white text-decoration-none" to="/*"><i class="fa fa-address-book-o" aria-hidden="true"></i> Términos y condiciones </NavLink></li>
                                <li><NavLink className="text-white text-decoration-none" to="/*"><i class="fa fa-gavel" aria-hidden="true"></i> Legales </NavLink></li>
                            </ul>
                        </div>
                        {/* columna 3 */}
                        <div className="col-links-2">
                            <ul>
                                <li><h5>Nuestras redes</h5></li>
                                <li><NavLink className="text-white text-decoration-none" to="/*"><i class="fa fa-instagram" aria-hidden="true"></i> Instagram </NavLink></li>
                                <li><NavLink className="text-white text-decoration-none" to="/*"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook </NavLink></li>
                                <li><NavLink className="text-white text-decoration-none" to="/*"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter </NavLink></li>
                            </ul>
                            <img className='img-qr ms-3' src={qr} alt="qrDataFiscal" />
                        </div>
                        {/* columna 4 */}
                        <div className="col-links-contacto">
                            <ul>
                                <h5>Encontranos en</h5>
                                <li><i class="fa fa-whatsapp me-2" aria-hidden="true"></i> 3815123456</li>
                                <li><i class="fa fa-map-marker me-2" aria-hidden="true"></i>General Paz 500, SMT</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row text-center leyenda">
                <hr />
                    <p> &copy; Todos los derechos reservados para los creadores. R-M-R-S</p>
                </div>
            </div>
    )
}

export default Footer