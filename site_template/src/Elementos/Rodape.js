import React from 'react'
import {FaInstagram, FaGithubAlt, FaEnvelopeOpenText} from 'react-icons/fa'

import '../Estilos/Rodape.css'

function Rodape() {
  return (
    <div className='box1'>

        <h3>Conatos/Sobre</h3>
        <div className='box-icones'>
            <FaGithubAlt size={28} color='black' value='GitHub' />
            <FaInstagram size={28} color='black' value='Instagram' />
            <FaEnvelopeOpenText size={28} color='black' value='Enviar Email' />
            
        </div>

    </div>
  )
}

export default Rodape