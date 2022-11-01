import React from 'react'
import Dados from '../data/Dados.json'
import '../components/css/Home.css'

function Home() {
  return (
    <div className='homeDiv'>
       
             <h2>Home</h2>
             <p>Perfil profissional</p>
             {Dados.perfil.bio}
       
        <div className='perfil2'>
            <p>Linguagens: {Dados.perfil.Linguagens}</p>
        </div>
        
    </div>
  )
}



export default Home
