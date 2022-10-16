import React from 'react';
import './Titulo.css';

function Titulo(props) {
  return (
    <div className='titulo'>
        <h2>{props.texto}</h2>
    </div>
  )
}

export default Titulo