import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";


import logo from "../assets/logo.png"
import SearchProd from './SearchProd';


export const NavbarApp = () => {
    const navigate = useNavigate();

    const [termino, setTermino] = useState("");

    const handleChange = (e) => {
      // console.log(e.target.value);
        setTermino(e.target.value);
    };

    const handleClick = () => {
        if (termino) {
            navigate(`/search/${termino}`);
        }
    };

    
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
                            <SearchProd/>                          
                        </ul>
                        <button type="button" class="btn btn-success mt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Iniciar Sesion
                        </button>

                        <button type="button" class="btn ms-5">
                            <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> <span class="badge rounded-pill bg-secondary">0</span>
                        </button>
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
                            <label for="exampleFormControlTextarea1" class="form-label">Contraseña</label>
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
