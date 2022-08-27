import React from 'react'
import {Link} from "react-router-dom"
import GridDestacados from '../components/GridDestacados'
import Categories from '../components/Categories'
import oferta1 from "../assets/cyber.jpg"
import oferta2 from "../assets/oferta2.jpeg"
import oferta3 from "../assets/oferta3.jpg"

import "../css/destacados.css"


const HomeScreen = () => {

    return (

        <>
            {/* Arreglar como se deforma la imagen cuando se hace responsive */}
            <div className="row">
                <div className="col">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item item">
                                <img src={oferta3} className="d-block w-100" alt="promocion"/>
                            </div>
                            <div className="carousel-item item active">
                                <img src={oferta1} className="d-block w-100" alt="promocion"/>
                            </div>
                            <div className="carousel-item item">
                                <img src={oferta2} className="d-block w-100" alt="promocion"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container" id='categoriasHome'>
                <div className="row">
                    <div className="">
                        <Categories/>
                    </div>
                </div>
                <hr />
            </div>
            
<<<<<<< HEAD
            <div className="container" id='prodDestacados'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <GridDestacados/>
=======
            <div className="row">
                <div className="col-lg-12">
                    <GridDestacados/>
                </div>

                {/* <div className="col-lg-2 me-1 mb-2">
                    <div className="publicidad-container" id="ocultar-div">
                        <div id="CarouselHeader2" className="carousel slide" data-bs-ride="carousel">
                            
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#CarouselHeader2" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#CarouselHeader2" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#CarouselHeader2" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            </div>
            
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={publicidad1} className="d-block w-100" alt="publicidad 1"/>
                                </div>
                                <div className="carousel-item">
                                <img src={publicidad2} className="d-block w-100" alt="publicidad 2"/>
                                </div>
                                <div className="carousel-item">
                                <img src={publicidad3} className="d-block w-100" alt="publicidad 3"/>
                                </div>
                            </div>
                        </div>
>>>>>>> 4eb96c90dcc2411e97ad2a4c2bee71c7c0523b10
                    </div>
                </div>
            </div>
            
            <div className="container" id='inputOfertas'>
                <div className="row">
                    <div className="col">
                        <h6>Enterate de nuestras mejores ofertas!</h6>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomeScreen