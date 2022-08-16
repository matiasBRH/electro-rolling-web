import React from 'react'

const TablaCart = (props) => {

    console.log(props)

    const {producto} = props

    return (

        <div className="row">
            <div className="col">
                <table className="table">
                    <tbody id="table_body" className='m-2'>
                        <td className='text-center colImg'><img className='imgCarrito' src={producto.imagen}/></td>
                        <td className='me-5 listProd'><h6>{producto.nombre}</h6></td>
                        <td className='ms-5 '><h6>$ {producto.precio}</h6></td>
                        <td ><button className="btn btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablaCart