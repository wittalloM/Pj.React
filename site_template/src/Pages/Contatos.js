import React from 'react'
import { useState } from 'react'
import {FaGithub, FaWhatsapp} from 'react-icons/fa'
import Popup from '../Elementos/Popup'

import '../Estilos/Contatos.css'




function Contatos() {
  

  const [email, setEmail] = useState()
  const [user_email, setUser_email] = useState()

  function enviar_email (e) {
      e.preventDefault()
      setUser_email(email)
      //window.alert('Testando função, ' + email)
  }

 
  return (
    
    
<>
            <div className='Contatos'>
                <h2>Nos ajude a melhorar, nos mande um email/comentário;
                    </h2>

            <div className='Form_feedback_user'>

                  <form>
                 
                  <input className='form-item' type='text' 
                  placeholder='Digite o seu nome' />
                  
                 
                  <input className='form-item' type='email' 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder='Digite o seu @ email' />
                  
                 
                  <input className='form-item' 
                  type='text' 
                  placeholder='Digite a sua mensagem'/>

                  <button onClick={enviar_email} 
                  className='botao'>Enviar</button>
                    
                  </form>
                  {user_email && <Popup 
                  texto='Email cadastrado ! ' />}
            </div>
            
            <div className='icons1'>
            <FaWhatsapp className='cont-icon' 
            size={38}/>
            <h3>(62) 9 9836 - 1512</h3>
            </div>
            
            <div className='icons2'>
            <FaGithub className='cont-icon'  size={38}/>
            <h3>
              <a href='https://github.com/wittalloM'>Perfil no GitHub</a>
            </h3>
            </div>
            
            </div>
</>
  )
 
}

export default Contatos