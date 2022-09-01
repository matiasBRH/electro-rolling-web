import React from 'react'
import {Link} from "react-router-dom"

import cel from "../assets/cel.png"
import notebook2 from "../assets/notebook2.png"
import tv from "../assets/tv2.png"
import tablet from "../assets/tablet.png"
import "../css/categorias.css"


const Categories = () => {
    
    return (

        <div className="container container-categorias-home">
            <div className="row">
                <ul className="list-inline d-flex justify-content-evenly align-middle circular">
                    <Link className='text-decoration-none' to="/category/televisores"><li className="list-inline-item text-black text-center"><img src={tv} alt="Cat1" /></li><h5 class="text-center mt-3">Televisores</h5></Link>
                    <Link className='text-decoration-none' to="/category/celulares"><li className="list-inline-item text-black text-center"><img src={cel} alt="Cat2"/></li><h5 class="text-center mt-3">Celulares</h5></Link>
                    <Link className='text-decoration-none' to="/category/notebooks"><li className="list-inline-item text-black text-center"><img src={notebook2} alt="Cat3" /></li><h5 class="text-center mt-3">Notebooks</h5></Link>
                    <Link className='text-decoration-none' to="/category/tablets"><li className="list-inline-item text-black text-center"><img src={tablet} alt="Cat4" /></li><h5 class="text-center mt-3">Tablets</h5></Link>
                </ul>
            </div>
        </div>
    )
}

export default Categories