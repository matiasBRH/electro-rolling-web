import React from 'react'
import {NavLink} from "react-router-dom"
// import Destacados  from '../components/Destacados'
import Grid from '../components/Grid'


const HomeScreen = () => {

    return (
        <>

            <div className="row destacados">
                {/* <div className="col">
                    <Destacados/>
                </div> */}
            </div>
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
                    <div className="publicidad mt-5">
                        <h3>aca va la publicidad, capaz que con carrousel</h3>
                    </div>
                </div>

                <div className="col-lg-8">
                    <Grid/>
                </div>
            </div>
        </>

    )
}

export default HomeScreen