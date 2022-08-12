import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import SliderCard from "../components/SliderCard"
import {FreeMode} from "swiper"
import "swiper.css"
import { listaProductos } from "../data/products";

import "swiper/css/free-mode"
import "../css/destacados.css"


const Destacados = () => {

    return (

            <div className="container py-4 px-4 mt-2 text-white bg-dark">
                <Swiper freemode={true} grabCursor={true} className="mySwiper bd-highlight flex-row" slidePerView={4} spaceBetween={20} >
                        {listaProductos.map((producto) => (
                    <SwiperSlide>
                        <SliderCard key={producto.id} producto={producto} />
                    </SwiperSlide>    
                    
                    ))}       
                </Swiper>
                
            </div>

    )
}

export default Destacados
