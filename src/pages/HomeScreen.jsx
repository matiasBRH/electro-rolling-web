import React from 'react'
import prod2 from "../assets/batodira prod 1.jpg"
import prod1 from "../assets/prod 2.avif"
import prod3 from "../assets//producto 3.jpg"

const HomeScreen = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-12">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <div className="img-area"><img src={prod1} alt="" /></div>
                                            <div className="img-text">
                                                <h3>Nombre prod</h3>
                                                <p>descripcion del producto destacado</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <div className="img-area"><img src={prod2} alt="" /></div>
                                            <div className="img-text">
                                                <h3>Nombre prod</h3>
                                                <p>descripcion del producto destacado</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-box">
                                            <div className="img-area"><img src={prod3} alt="" /></div>
                                            <div className="img-text">
                                                <h3>Nombre prod</h3>
                                                <p>descripcion del producto destacado</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen