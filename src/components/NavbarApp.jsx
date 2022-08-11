import React, {useEffect,} from 'react'
// import {Link, NavLink} from "react-router-dom"



import logo from "../assets/logo.png"
import carrito from "../assets/carrito.png"

export const NavbarApp = () => {

    return (
        <>

            <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark w-100'>
                <div className="container-fluid">
                    <div className="logo me-5">
                        <img className="img-logo" src={logo} alt="logo"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse links" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" to="/">Home</a>
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
                        </ul>
                        <form className="d-flex me-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Iniciar Sesion
                        </button>
                        <div className="carrito ms-5 d-flex ">
                            <img className="img-logo" src={carrito} alt="logo"/>
                            <h4 className='text-white mt-3 me-2' id="contador">0</h4>
                        </div>
                    </div>
                </div>
            </nav>

            

                
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Iniciar Sesion</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary">Aceptar</button>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default NavbarApp
