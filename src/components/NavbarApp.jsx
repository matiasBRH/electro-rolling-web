import React, {useState} from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
import ModalLogin from "../components/ModalLogin"

import logo from "../assets/logo.png"

export const NavbarApp = () => {


    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

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


    // Seccion para abrir modal de Login
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
                                <Link className="nav-link" aria-current="page" to="/">Home <i className="fa fa-home" aria-hidden="true"></i></Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/*">Destacado <i className="fa fa-thumb-tack" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">Contacto <i className="fa fa-commenting-o" aria-hidden="true"></i></NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className="nav-link" to="/favorites">Favoritos <i class="fa fa-star-o" aria-hidden="true"></i></NavLink>
                            </li>
                            {/* <SearchProd/>*/}
                            <li className='d-flex'>
                                <form className='col' onSubmit={handleSubmit}>
                                    <input className="form-control me-2" type="text" placeholder="Buscar" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                                    {/* <button class="btn btn-success" type="submit">Buscar</button>. */}
                                </form>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <div>
                                <button className="btn btn-success me-2" onClick={handleShow}>
                                    Ingresar
                                </button>
                            </div>
                            <ModalLogin show={show} handleClose={handleClose} />
                            <NavLink className="nav-link" to="/cart"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarApp
