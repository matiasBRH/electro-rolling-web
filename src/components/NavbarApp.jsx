import React, {useState, useEffect} from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
import ModalLogin from "../components/ModalLogin"

import logo from "../assets/icon.png"
import SearchProd from './SearchProd';
import "../css/navBar.css"

export const NavbarApp = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {

        navigate(`/search/${inputValue}`);
        // buscarBlog(inputValue).then((respuesta) => {
        //   console.log(respuesta);
        //   navigate(`/search/${inputValue}`);
        // });
        }
    };
    
    useEffect(()=>{
        
    }, [carrito]);
    


    // Seccion para abrir modal de Login
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>

            <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark w-100'>
                <div className="container-fluid ms-5">
                    <div className="logo me-5">
                    <NavLink className="nav-link" aria-current="page" to="/"><img className="img-logo" src={logo} alt="logo"/></NavLink>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse links" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home <i className="fa fa-home loguito" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/*">Destacado <i className="fa fa-thumb-tack loguito" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">Contacto <i className="fa fa-commenting-o loguito" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Sobre nosotros <i className="fa fa-users loguito" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/favorites">Favoritos <i className="fa fa-star-o loguito" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin">Administracion <i class="fa fa-id-card loguito" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                            <SearchProd/>
                            </li>
                        </ul>

                        <div className="d-flex me-2 d-flex align-baseline">
                            <div>
                                <button className="btn btn-success me-2" onClick={handleShow}>
                                    Ingresar
                                </button>
                            </div>
                            <ModalLogin show={show} handleClose={handleClose} />
                            <NavLink className="nav-link btn" to="/cart"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></NavLink>
                        </div>
                        <button type="button" className="btn">
                            <span className="badge rounded-pill bg-secondary">{carrito.length}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarApp
