import React from 'react'
import '../components/css/Navbar.css'
import Dados from '../data/Dados.json'

import cartonarte from '../images/Cartoon arte.png'


function Navbar() {
  return (
    <div>
    <navbar className='cabecalho'>
       <ul>
       <li>
            <img src={cartonarte} alt='Imagem do Perfil' />
        </li>
        <li>{Dados.perfil.nome}</li>
        <li>Home</li>
        <li>Experiência</li>
       </ul>
    </navbar>
  
  </div>
  )
}

export default Navbar