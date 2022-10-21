
import React from 'react';
import {RiGithubLine, RiInstagramLine} from 'react-icons/ri'

import '../components/css/Rodape.css';


function Rodape(props) {

function redirec() {
  window.alert("Indicando Git");

}

  return (
    <div className='contato'>
        <ul className='lst_cntts'>
         <button onClick={redirec}>
          <RiGithubLine size={25} color='black' />
          </button>
         <button>
          <RiInstagramLine size={28} color='black' />
           </button>   
        </ul>
          <p>
            <spam>
            {props.texto}
            </spam>
         </p>
    </div>
  )
}

export default Rodape;