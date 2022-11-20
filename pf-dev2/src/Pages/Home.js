import React from 'react'





import '../Css/Hme.css'
import htmlcss from '../Images/htmlCssimage1.jpg'
import javaScript from '../Images/JSimage1.jpeg'



function Home() {
  return (
  
  <>
     
     <div className='box1'>
            <h2>Olá, Seja Bem Vindo a minha página de dor sofrimento e muito aprendizado;</h2>        
    </div>
    <div className='container'>
    <div className='box2'>
        <h3>Essas são algumas das tecnologias, as quais ando estudadando e conhecendo,
        clique em alguma delas para possa saber mais a respeito.
        </h3>
        <div className='linguagens'>
          <div>
          <p>Java Script</p>
          <img src={htmlcss} alt='Ilustração HTML/Css' />
          </div>
         <div>
          <p>HTML/Css</p>
          <img src={javaScript} alt='Ilustração JavaScript' />
          </div>
         
        </div>
    </div>
    </div>
    
  </>
  )
}

export default Home