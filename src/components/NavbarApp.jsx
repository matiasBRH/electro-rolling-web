import React from 'react'
// import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo.png"
import carrito from "../assets/carrito.png"

export const NavbarApp = () => {

    return (
        <>

            <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark w-100'>
                <div className="container-fluid">
                    <div className="logo me-5">
                        <a className="navbar-brand" to="/">
                            <img className="img-logo" src={logo} alt="logo"/>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse links" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Destacado</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Favoritos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Login</a>
                            </li>
                        </ul>
                        <form className="d-flex me-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <div className="carrito ms-5 d-flex ">
                            <img className="img-logo" src={carrito} alt="logo"/>
                            <h4 className='text-white mt-3 me-2' id="contador">0</h4>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarApp
