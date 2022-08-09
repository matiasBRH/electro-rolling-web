import React from 'react'
import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo.png"

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <i className="fa fa-file-o" aria-hidden="true"></i> Electro Rolling
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarNav"
                >
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/category/reactions"
                    >
                        Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/category/entertainment">
                        Destacado
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/category/sports">
                        Contacto
                    </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li>
                    <img className="img-login" src={ojos} alt="avatar" />
                    <button className="btn btn-secondary btn-login">Login</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
