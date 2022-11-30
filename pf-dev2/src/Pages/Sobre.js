import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {HiOutlineMailOpen} from 'react-icons/hi'

import '../Css/Sbr.css'

function Sobre() {
  return (
    
   <>
    <div className='Contato'>
        <h3>Contato/Acesse:</h3><br></br>
        <h3 className='itemsbr'><BsWhatsapp size={25} />Nº 62 9 98361512</h3>
        <h3 className='itemsbr'><HiOutlineMailOpen size={25} />wittallomarcos@gmail.com</h3>
    </div>
    <div className='feedback'>
      <form>
        <h2>Nos mande uma mensagem.</h2>
        <p>Escreva o seu feedback:</p>
        <input type="text" size={65}/>
        <button>Enviar Feedback</button>
      </form>
    </div>
   </>

  )
}
export default Sobre
