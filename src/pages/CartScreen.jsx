import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TablaCart from "../components/TablaCart";
import NumberFormat from "react-number-format";
import PurchaseConfirm from "../components/PurchaseConfirm";
import { postCompras } from "../helpers/fetchApi";
import "../css/pantallaTotal.css";

const CartScreen = () => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [total, setTotal] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [botonComprar, setBotonComprar] = useState(false);
  const [productos, setProductos] = useState([]);
  const [body, setBody] = useState("");
  const [mensaje, setMensaje] = useState([]);
  const [thanks, setThanks] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    calcularTotal();    
    if (carrito.length == 0 || JSON.parse(localStorage.getItem('dataUser'))==null) {
      setBotonComprar(false);
    } else {
      setBotonComprar(true);
    }
  }, [refresh, thanks]);

  const calcularTotal = () => {
    setTotal(0);
    let sumando = 0;
    console.log(carrito);
    carrito.forEach((element) => {
      sumando = sumando + parseFloat(element.precio);
      setTotal(sumando);
      console.log(total);
    });
  };

  const deleteCart = (id) => {
    console.log(id);
    let carritoTemp = carrito;
    carritoTemp.splice(id, 1);
    setCarrito([...carritoTemp]);
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // juegos.splice(index, 1);
    setRefresh(refresh + 1);
  };

  const realizarCompra = () => {
    let arreglo = [];
    carrito.forEach((element) => {
      const { productID } = element;
      arreglo.push(productID);
    });

    let datos = {
      usuario: "6303f5aab2c76d7cec6899df",
      producto: arreglo,
    };
    console.log(datos);

    postCompras(datos).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.errors) {
        setMensaje(respuesta.errors);
      } else {
        setMensaje([{ msg: "Compra realizada!" }]);
        setCarrito([]);
        console.log("compra");
        localStorage.setItem("carrito", JSON.stringify([]));
        setThanks("true");
        setTimeout(() => {
          setMensaje("");
          console.log("compra tiempo");
          navigate(`/`);
        }, 3000);
      }
      setTimeout(() => {
        setMensaje("");
        console.log("compra tiempo");
      }, 3000);
    });
  };

  const vaciarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify([]));
    setCarrito([]);
    setRefresh(refresh + 1);
  };

  return (
    <>
      {thanks ? (
        <PurchaseConfirm />
      ) : (
        <div className="alturaParaFooter">
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h1>Mi carrito 🛒</h1>
                <hr />
              </div>
            </div>
          </div>

          <div className="container mainCarrito">
            <div className="row">
              <div className="listado col-12 col-md-8 col-lg-8">
                {carrito.length == 0 ? (
                  <h1>El carrito está vacio.</h1>
                ) : (
                  carrito.map((producto, index) => (
                    <TablaCart
                      key={index}
                      index={index}
                      producto={producto}
                      deleteCart={deleteCart}
                    />
                  ))
                )}
              </div>

              <div className="sumador card p-2 h-50 mb-3 col-6 col-md-3 col-lg-3">
                <div className="total">
                  <h3 className="ms-1 mt-3">
                    Total:{" "}
                    <NumberFormat
                      value={total}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      decimalScale={"2"}
                      fixedDecimalScale={true}
                      prefix={"$ "}
                    />
                  </h3>
                </div>

                <div className="mt-2 envio d-flex justify-content-start align-bottom"></div>

                <hr />
                <div className="botones">
                  {botonComprar ? (
                    <button
                      className="btn btn-success"
                      onClick={realizarCompra}
                    >
                      Comprar
                    </button>
                  ) : (
                    <button className="btn btn-success " disabled>
                      Comprar
                    </button>
                  )}

                  <button className="btn btn-danger" onClick={vaciarCarrito}>
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartScreen;
