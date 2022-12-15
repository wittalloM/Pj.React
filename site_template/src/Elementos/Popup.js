import React from 'react'

import '../Estilos/Popup.css'



function Popup (props) {
    return(
        <div className='cont-popup'>
            <h2>{(props.texto)}</h2>
        </div>
    )
}

export default Popup