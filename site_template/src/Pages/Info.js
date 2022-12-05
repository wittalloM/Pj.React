import React from 'react'
import Contatos from './Contatos'

import '../Estilos/Info.css'
import '../Estilos/Contatos.css'

function Info() {
    return (
    <div className='box1-sobre'>
        <h2>Utilize os endereços e métodos recomendados
            para entrar em contato com a produção
        </h2>
        <p>Caso haja espera na resposta, aguarde que você será respondido</p>
        <Contatos />
    </div>
  )
}

export default Info