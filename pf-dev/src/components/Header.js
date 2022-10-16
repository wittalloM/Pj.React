import React from 'react'


import '../components/css/Header.css'
import cartonarte from '../images/Cartoon arte.png'
import Dados from '../data/Dados.jsom'

function Header(perfil) {
  return (
    <div>
    <nav className='cabecalho'>
       <ul>
       <li>
            <img src={cartonarte} alt='Imagem do Perfil' />
        </li>
        <li>
          sobrenome
        </li>
        <li>
          {Dados.perfil.nome}
        </li>
       </ul>
    </nav>
  
  </div>
  )
}

export default Header