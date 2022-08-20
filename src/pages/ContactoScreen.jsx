import { useEffect, useState } from 'react'
import "../css/destacados.css"
import emailjs from "emailjs-com"


const ContactoScreen = () => {

    const[formValues, setformValues]= useState({
        nombre: "",
        email: "",
    });

    const {nombre, email}=formValues;

    const handleChange=({target})=>{
     setformValues({
        ...formValues,
        [target.name]:target.value
     })
    }

    useEffect(() => {
      console.log("Se actualizó el formulario")
    },[formValues])



    const sendMail=(e)=>{
      e.preventDefault();

      emailjs.sendForm("service_fartkbh", "template_o4ni2xb", e.target, "feEXNVTGo4JtcJNqF").then(response => console.log(response)).catch(error => console.log(error));
      
      e.target.reset();
    }
    
    return (
        <>
            <div className="container my-4 back-e">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6" id="fondo">
                        <h2> CONTACTO </h2>
                        <hr/>
                        <form className='form-mail' onSubmit={sendMail}>
                            <div className="mb-3">
                                <label className="form-label2">Nombre</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="nombre"
                                placeholder="Ingrese su nombre"
                                value={nombre}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label2">Correo electrónico</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                placeholder="Ingrese su correo electrónico" 
                                value={email}
                                onChange={handleChange}
                                />
                                <div className="form-text"> <i>No compartiremos tu correo electrónico con nadie más.</i></div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label2">Deja tu mensaje</label>
                                <textarea className="form-control" 
                                
                                rows="6" 
                                placeholder="Escriba su consulta"
                                name="message"
                                >
                                </textarea>                    
                            </div>

                            <div className="mb-3 md-2">
                               <input type="submit" className='btn btn-success me-4' value="Enviar" />
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2> MÁS INFORMACIÓN</h2>
                        <hr/>
                        <ul>
                    <li><i className="fa fa-map-marker"></i> Argentina</li>
                    <li><i className="fa fa-phone"></i> (666) 666 666 666</li>
                    <li><i className="fa fa-envelope"></i> ElectroRolling@Website.com</li>
                </ul> 
                <hr />
                <p>Si tienes algun problema, no dudes en consultarnos o contactarte con nuestro servicio de telefonia!</p>
                <p>EvilGeniusMovies.com</p>
                <hr />
                <div className='md-6 col-lg-6'>
                    <h4>¡Nuestro WhatsApp</h4>
                    <a href="http://Whatsapp.com"><i className="fa fa-whatsapp fa-4x"></i></a>
                </div>
                    </div>
                  
                </div>
            </div>
        </>
        
    )
}

export default ContactoScreen
