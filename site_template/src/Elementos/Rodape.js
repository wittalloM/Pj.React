import React from 'react'
import {FaInstagram, FaGithubAlt, FaEnvelopeOpenText} from 'react-icons/fa'

import '../Estilos/Rodape.css'

function Rodape() {
  return (
    <div className='box1'>

        <h3>Contatos/Sobre</h3>
        <div className='box-icones'>
            <FaGithubAlt className='icon-rodape' size={28} color='white' value='GitHub' />
            <FaInstagram className='icon-rodape' size={28} color='white' value='Instagram' />
            <FaEnvelopeOpenText className='icon-rodape' size={28} color='white' value='Enviar Email' />
            
        </div>

    </div>
  )
}

export default Rodape