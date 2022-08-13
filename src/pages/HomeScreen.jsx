import React from 'react'
import {NavLink} from "react-router-dom"
import Destacados  from '../components/Destacados'
import Grid from '../components/Grid'
import publicidad1 from "../assets/publicidad 1.jpg"
import publicidad2 from "../assets/publicidad 2.jpg"
import publicidad3 from "../assets/publicidad 3.jpg"

import "../css/publi.css"

const HomeScreen = () => {

    return (
        <>

            <div className="row destacados">
                <div className="col">
                    <Destacados/>
                </div>
            </div>
            <hr />
            <div className="row mt-5 text-center">
                <div className="col-lg-2">
                    <div class="dropdown mb-5">
                        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark text-center" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Celulares</a></li>
                            <li><a class="dropdown-item" href="#">Heladeras</a></li>
                            <li><a class="dropdown-item" href="#">Televisores</a></li>
                        </ul>
                    </div>
                    <hr /><br /><br />

                    <div class="publicidad-container ms-3" id="ocultar-div">
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
                </div>

                <div className="col-lg-10">
                    <Grid/>
                </div>
            </div>
        </>

    )
}

export default HomeScreen