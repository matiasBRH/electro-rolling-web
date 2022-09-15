import React, {useState, useEffect} from 'react'
import {Link, NavLink, useNavigate, useLocation} from "react-router-dom"
import ModalLogin from "../components/ModalLogin"
import logo from "../assets/icon.png"
import SearchProd from './SearchProd';
import "../css/navBar.css"

export const NavbarApp = () => {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [userData, setUserData] = useState({})
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])
    const [admin, setAdmin] = useState(false)
    const [boton, setBoton] = useState(false) //false siendo que aparezca iniciar sesión
    const location = useLocation()
    const [userInfo,setUserInfo]=useState({role: undefined})
    

    
    const resetUserInfo=()=>{
        localStorage.removeItem('dataUser')
        localStorage.removeItem('token')
        localStorage.setItem("carrito", JSON.stringify([]));
        localStorage.setItem("favoritos", JSON.stringify([]));
        setUserInfo({})
        setBoton(false)
        navigate("/");
        };
        

    useEffect(()=>{

        setUserData(JSON.parse(localStorage.getItem('dataUser'))); 
        setCarrito(JSON.parse(localStorage.getItem("carrito")) || [])
        if (JSON.parse(localStorage.getItem('dataUser'))!==null) {

            console.log("OKEY")
            console.log(localStorage.getItem('dataUser').rol_user);
                setUserInfo({role:JSON.parse(localStorage.getItem('dataUser')).rol_user})
        } 
        window.addEventListener('storage', storageEventHandler, false);
        console.log(userInfo.role)

        
        if (userInfo.role !== undefined) {

            setBoton(true);
        }

        if (boton && userInfo.role === "ADMIN_ROLE") {
            setAdmin(true)
        }else{
            setAdmin(false)
        }

    }, [location.pathname, userInfo.role, boton, carrito]);
    
    function storageEventHandler() {
        setUserDataLocalStorage(JSON.parse(localStorage.getItem('dataUser')));  
    }


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
                                <NavLink className="nav-link" to="/highlight">Destacado <i className="fa fa-thumb-tack loguito" aria-hidden="true"></i></NavLink>
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

                                {admin ?

                                (<NavLink className="nav-link" to="/admin">Administracion <i class="fa fa-id-card loguito" aria-hidden="true"></i></NavLink>)
                                
                                :""
                                }

                            </li>
                            <li className="nav-item">
                            <SearchProd/>
                            </li>
                        </ul>

                        <div className="d-flex me-2 d-flex align-baseline">
                            <div>
                                
                                {boton ?
                                (<button className="btn btn-danger me-2" onClick={resetUserInfo}>
                                    Cerrar Sesion
                                    </button>)
                                :
                                (<button className="btn btn-success me-2" onClick={handleShow}>
                                Ingresar
                                </button>)
                                
                                }
                                
                            </div>
                            <ModalLogin show={show} setShow={setShow} setBoton={setBoton} handleClose={handleClose} />
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