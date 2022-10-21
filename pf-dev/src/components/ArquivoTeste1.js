

import React from 'react';
import './css/ArquivoTeste1.css'

function MainTst() {

    function cadastro() {
        console.log("Está funcionando");
    }
    return(
    <div className="form">
          
    <p>Testes</p>  
            <div className='campoimput1'>
                <form>
                    <input type='text' placeholder='Digite o seu email !' />
                    
                </form>
                <button onClick={(e) => cadastro()}>Enviar Email</button>     
            </div>
           
    </div>
     
    )

}


export default MainTst;