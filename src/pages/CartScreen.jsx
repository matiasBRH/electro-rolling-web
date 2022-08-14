import React from 'react'

const CartScreen = () => {

  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <h1>
            Productos seleccionados
          </h1>
        </div>
      </div>
      <hr />
      <div class="row">
          <div class="col">
            <table class="table">
              <tbody id="table_body">
                <br />
                <td>nombre</td>
                <td>descrip</td>
                <td>precio</td>
                <td>
                  <button id="borrar_curso" class="btn btn-danger btn-sm"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>`
              </tbody>
              <tfoot>
                <button className='btn btn-success me-4'>
                  Confirmar
                </button>
                <button className='btn btn-danger'>
                  Cancelar
                </button>
              </tfoot>
            </table>
          </div>
        </div>
    </div>
  )
  
}

export default CartScreen