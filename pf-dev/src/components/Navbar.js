import React from 'react'


import '../components/css/Navbar.css'
import cartonarte from '../images/Cartoon arte.png'


function Navbar(perfil) {
  return (
    <div>
    <navbar className='cabecalho'>
       <ul>
       <li>
            <img src={cartonarte} alt='Imagem do Perfil' />
        </li>
        <li><bold>
          sobrenome
          </bold></li>
        <li>
          <bold>Experiência</bold>
        </li>
       </ul>
    </navbar>
  
  </div>
  )
}

export default Navbar