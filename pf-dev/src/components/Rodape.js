
import React from 'react';
import Dados from '../data/Dados.json'
import {RiGithubLine, RiInstagramLine} from 'react-icons/ri'

import '../components/css/Rodape.css';


function Rodape(props) {

function redirec(value) {

  window.alert('Redirecionando...' + Dados.redes.git);
  console.log(Dados.redes.git)
  }

  return (
    <div className='contato'>
        <div>
        <p>{props.texto}</p>
        </div>
        <div className='icons'>
        <ul>
        <button onClick={redirec}>
        <RiGithubLine size={30} value='GitHub' color='black' />
        </button>
        <button onClick={redirec}>
        <RiInstagramLine size={30} value='Instagran' color='black' />
        </button>   
        </ul>
        </div>
    
    </div>
  )
}

export default Rodape;