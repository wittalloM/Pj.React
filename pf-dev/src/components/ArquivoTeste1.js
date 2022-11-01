

import React from 'react';
import { useState } from 'react';
import './css/ArquivoTeste1.css'

function ArquivoTeste1() {

    const [email,setEmail] = useState();
    const [nomeuser,setNomeuser] = useState();
    const usuarios = [];
    
    function cadastro(e) {
        setNomeuser(nomeuser)
        setEmail(email)
        console.log("Está funcionando");
        console.log('Dados do cidadão: ' + nomeuser + ' , ' + email)
        cadastro_pos()
       
        }

        function resetNome(e) {
            
            setNomeuser('')
            setEmail('')
            window.alert('Cadastro Resetado ! ')

        }

        function cadastro_pos(){
            setNomeuser(nomeuser)
            setEmail(email)
            usuarios[0] = [nomeuser, email]
            window.alert(usuarios[0])
        }


    
    return(
    <div className="form">
          
    <h3>Formulário de Teste</h3>  
            <div className='campoimput1'>
                <form>
                    <div className='lstinputs'>
                    <label htmlFor='name'>Nome :</label> 
                    <input 
                    type='text' 
                    value={nomeuser} 
                    onChange={(e) => setNomeuser(e.target.value)} 
                    id='name' 
                    placeholder='Digite o seu nome completo ' />
                    <label htmlFor='email'>Email :</label>
                    <input 
                    type='text' 
                    id='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Digite o seu @e-mail' />
                    </div>
                </form>
                <button onClick={(e) => cadastro()}>Enviar Cadastro</button>
                {nomeuser && (
                    <div className='popup'>
                        <h2>O nome do usuário é: <bold>{nomeuser}</bold></h2>
                        <button onClick={(e) => resetNome()}>Inserir um novo Usuário</button>
                        </div>
                )} 

                   
            </div>
           
    </div>
     
    );

}


export default ArquivoTeste1