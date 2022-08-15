import React from 'react'

const CartScreen = () => {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Mi carrito 🛒</h1>
            <hr />
          </div>
        </div>
      </div>

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-7">
            <h1>Listado de prodcutos</h1>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5">
            <div className="card">
              <div class="card-body">

                <div className="row">
                  <div className="col">
                    <h6 class="card-subtitle text-muted">Subtotal</h6>
                  </div>
                  <div className="col text-muted">
                    <h6>$</h6>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col">
                    <h6 class="card-title mb-2 ">Total</h6>
                  </div>
                  <div className="col">
                    <h6 class="card-title mb-2 ">$</h6>
                  </div>
                </div>

                  <a href="#" class="btn btn-success me-2">Confirmar compra</a>
                  <a href="#" class="btn btn-danger">Cancelar Compra</a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
  
}

export default CartScreen