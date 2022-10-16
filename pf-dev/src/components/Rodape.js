
import React from 'react';
import {RiGithubLine, RiInstagramLine} from 'react-icons/ri'

import '../components/css/Rodape.css';


function Rodape(props) {
  return (
    <div className='contato'>
        <ul className='lst_cntts'>
         <button>
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