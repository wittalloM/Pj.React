import React from 'react'
import {Link} from 'react-router-dom'

import '../Css/teste1.css';

function teste1() {
  return (
    <div className='Header1'>
         <h3 className='titulo'>Info.</h3>
    
    <ul className='naveg1'>
      <li className='iten'><Link to="/">Home</Link></li>
      <li className='iten'><Link to="/Sobre">Sobre</Link></li>
    </ul>
    </div>
  )
}

export default teste1