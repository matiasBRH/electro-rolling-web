import React from 'react'
import {Card, Button} from "react-bootstrap"

const SliderCard = (props) => {
    // let {imgSrc, price, title} = props.data
    const {producto} = props
    
    return (
        
        <Card className='p-0 overflow-hidden h-100 shadow sliderCard'>
            <div className="overflow-hidden rounded p-0 ">
                <Card.Img variant="top" src={producto.imagen}/>
            </div>
            <Card.Body className='text-center'>
                <Card.Title className='text-black'>{producto.titulo}</Card.Title>
                <Card.Title className='display-6 text-black'>{producto.precio}</Card.Title>
            </Card.Body>
            <Button className='w-100 rounded-0' variant='success'>Comprar</Button>
        </Card>
    )
}

export default SliderCard