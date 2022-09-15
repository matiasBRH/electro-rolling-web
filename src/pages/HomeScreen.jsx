import React from 'react'
import {Link} from "react-router-dom"
import GridDestacados from '../components/GridDestacados'
import Categories from '../components/Categories'
import oferta1 from "../assets/banner1.webp"
import oferta2 from "../assets/banner2.webp"
import oferta3 from "../assets/banner3.png"
import oferta4 from "../assets/banner4.png"
import novedades from "../assets/novedades.webp"

import "../css/destacados.css"


const HomeScreen = () => {

    return (

        <>
            {/* Arreglar como se deforma la imagen cuando se hace responsive */}
            <div className="row filaCarrousel">
                <div className="col">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item item">
                                <img src={oferta1} className="d-block w-100" alt="promocion"/>
                            </div>
                            <div className="carousel-item item active">
                                <img src={oferta2} className="d-block w-100" alt="promocion"/>
                            </div>
                            <div className="carousel-item item">
                                <img src={oferta3} className="d-block w-100" alt="promocion"/>
                            </div>
                            <div className="carousel-item item">
                                <img src={oferta4} className="d-block w-100" alt="promocion"/>
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
            <hr id='hrHome' />
            

            <div className="container" id='categoriasHome'>
                <div className="row">
                    <div className="">
                        <Categories/>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container-fluid banner-novedades"><img src={novedades} alt="novedades" /></div>
            <div className="container mt-5" id='prodDestacados'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                    <GridDestacados/>
                    </div>
                </div>
            </div>
            
            <div>

            </div>
        </>
    )
}

export default HomeScreen