import React, { useEffect, useState } from "react";
import NumberFormat from 'react-number-format';
import { getProductById } from "../helpers/fetchApi";
import "../css/cartScreen.css"

const TablaCart = (props) => {
  
    const id = props.index
    const {deleteCart} = props
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [mensaje, setMensaje] = useState("");
    
    useEffect(() => {
        getProductById(props.producto.productID).then((respuesta) => {
          console.log(respuesta);
          if (respuesta?.msg) {
            setMensaje(respuesta.msg);
          } else {
            setPost(respuesta.producto);
          }
          setLoading(false);
        });
      }, []);

    return (
        <div className="row">
            <div className="col">
                <table className="table ">
                    <tbody id="table_body" className='m-2'>
                        <td className='text-center colImg'><img className='imgCarrito' src={post.img}/></td>
                        <td className='me-5 listProd'><h6>{post.nombre}</h6></td>
                        <td className='ms-5 '><h6><NumberFormat value={post.precio} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={'2'} fixedDecimalScale={true} prefix={'$ '} /></h6></td>
                        <td ><button className="btn btn-danger btn-sm td-button mt-4" onClick={event => deleteCart(id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablaCart