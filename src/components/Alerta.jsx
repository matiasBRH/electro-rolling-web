import React from 'react'

const Alerta = ({alerta}) => {

    return (

        <div className="alert alert-danger mt-3">
            {alerta.msg}
        </div>
    )
}

export default Alerta