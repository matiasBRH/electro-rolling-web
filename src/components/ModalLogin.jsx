import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

const ModalLogin = ({ show, handleClose }) => {

    return (

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                <h2>
                    <i className="fa fa-user-circle-o me-3" aria-hidden="true"></i>
                    Iniciar Sesion
                </h2>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="mb-3">
                    <label className="form-label">Correo Electonico</label>
                    <input type="email" className="form-control"placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="*******"/>
                </div>
            </form>
            <NavLink to='/password'><Button variant='link' onClick={handleClose}>¿Olvidaste tu contraseña?</Button></NavLink>
            <NavLink to='/registro'><Button variant='link' onClick={handleClose}>Registrate</Button></NavLink>


            
            

        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
                Ingresar
            </Button>
            <Button variant="success" onClick={handleClose}>
                Google
            </Button>
            
        </Modal.Footer>
        </Modal>
    );
};

export default ModalLogin;