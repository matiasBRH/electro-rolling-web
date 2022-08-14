import React from 'react'
import GridDestacados from '../components/GridDestacados'
import Categories from '../components/Categories'
import oferta1 from "../assets/cyber.jpg"
import oferta2 from "../assets/oferta2.jpeg"
import oferta3 from "../assets/oferta3.jpg"
import publicidad1 from "../assets/publicidad 1.jpg"
import publicidad2 from "../assets/publicidad 2.jpg"
import publicidad3 from "../assets/publicidad 3.jpg"

import "../css/publi.css"

const HomeScreen = () => {

    return (

        <>
            {/* Arreglar como se deforma la imagen cuando se hace responsive */}
            <div className="row">
                <div className="col">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item item">
                                <img src={oferta3} class="d-block w-100" alt="promocion"/>
                            </div>
                            <div class="carousel-item item active">
                                <img src={oferta1} class="d-block w-100" alt="promocion"/>
                            </div>
                            <div class="carousel-item item">
                                <img src={oferta2} class="d-block w-100" alt="promocion"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Categories/>
                    </div>
                </div>
            </div>         
            <hr />
            
            <div className="row">
                <div className="col-lg-12">
                    <GridDestacados/>
                </div>

                {/* <div className="col-lg-2 me-1 mb-2">
                    <div class="publicidad-container" id="ocultar-div">
                        <div id="CarouselHeader2" class="carousel slide" data-bs-ride="carousel">
                            
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#CarouselHeader2" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#CarouselHeader2" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#CarouselHeader2" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            </div>
            
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={publicidad1} class="d-block w-100" alt="publicidad 1"/>
                                </div>
                                <div class="carousel-item">
                                <img src={publicidad2} class="d-block w-100" alt="publicidad 2"/>
                                </div>
                                <div class="carousel-item">
                                <img src={publicidad3} class="d-block w-100" alt="publicidad 3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>

    )
}

export default HomeScreen