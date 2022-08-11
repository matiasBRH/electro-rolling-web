import React from 'react'
import Destacados  from '../components/Destacados'
import Grid from '../components/Grid'


const HomeScreen = () => {

    return (
        <>

            <div className="row destacados">
                <div className="col">
                    <Destacados/>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-2">
                    <h3>categorias</h3>
                </div>
                <div className="col-lg-8">
                    <Grid/>
                </div>
                <div className="col-lg-2">
                    <h3>publicidad</h3>
                </div>
            </div>
        </>

    )
}

export default HomeScreen