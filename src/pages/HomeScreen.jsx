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

            <div className="container" id='categoriasHome'>
                <div className="row">
                    <div className="">
                        <Categories/>
                    </div>
                </div>
                <hr />
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <GridDestacados/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomeScreen