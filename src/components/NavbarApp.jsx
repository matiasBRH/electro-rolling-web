import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {Link, NavLink} from "react-router-dom"
import ModalLogin from "../components/ModalLogin"

import logo from "../assets/logo.png"

export const NavbarApp = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>

            <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark w-100'>
                <div className="container-fluid ms-5">
                    <div className="logo me-5">
                        <img className="img-logo" src={logo} alt="logo"/>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse links" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home <i class="fa fa-home" aria-hidden="true"></i></Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/*">Destacado <i class="fa fa-thumb-tack" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">Contacto <i class="fa fa-commenting-o" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/favorites">Favoritos <i class="fa fa-star-o" aria-hidden="true"></i></NavLink>
                            </li>
                            {/* <SearchProd/>*/}
                            <li className='d-flex'><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-success" type="submit">Buscar</button></li>
                        </ul>

                        <div className="LogyReg d-flex">
                            <div>
                                <button className="btn btn-success me-2" onClick={handleShow}>
                                    Ingresar
                                </button>
                            </div>
                            <ModalLogin show={show} handleClose={handleClose} />
                        </div>

                        <button type="button" className="btn">
                            <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> <span class="badge rounded-pill bg-secondary"> 0</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarApp
