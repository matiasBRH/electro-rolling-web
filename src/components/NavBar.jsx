import React from 'react'
import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo.png"

const NavBar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" width={100} />
                </Link>

                {/* <div className="d-flex navbar-expand" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                    <NavLink className="nav-link " aria-current="page" to="/">
                        HOME
                    </NavLink>
                    </li>
                    <li className="nav-item  text-white">
                    <NavLink className="nav-link" to="/edit">
                        Destacado
                    </NavLink>
                    </li>
                    <li className="nav-item  text-white">
                    <NavLink className="nav-link" to="/edit">
                        contacto
                    </NavLink>
                    </li>
                    <li className="nav-item  text-white">
                    <NavLink className="nav-link" to="/edit">
                        Favoritos
                    </NavLink>
                    </li>
                    <li className="nav-item  text-white">
                    <NavLink className="nav-link" to="/edit">
                        Carrito
                    </NavLink>
                    </li>
                    <SearchApp />
                </ul>
                </div> */}
            </div>
        </nav>
    )
}

export default NavBar
