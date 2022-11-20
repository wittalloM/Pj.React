import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {HiOutlineMailOpen} from 'react-icons/hi'

import '../Css/Sbr.css'

function Sobre() {
  return (
    
   <>
    <div className='Contato'>
        <h3>Contato/Acesse:</h3><br></br>
        <h3><BsWhatsapp size={25} />Nº 62 9 98361512</h3>
        <h3><HiOutlineMailOpen size={25} />wittallomarcos@gmail.com</h3>
    </div>
    <div className='Redes'>
        <p>GitHub</p>        
            
        <button FiGithub size ={35}>
            <FiGithub size ={75} />
        </button>
    </div>
   </>

  )
}
export default Sobre
