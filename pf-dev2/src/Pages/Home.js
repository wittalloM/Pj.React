import React from 'react'
import htmlcss from '../Images/htmlCssimage1.jpg'
import javaScript from '../Images/JSimage1.jpeg'



import '../Css/Hme.css'




function Home() {
  return (
  
  <>
     
     <div className='box1'>
            <h2>Olá, Seja Bem Vindo a minha página de dor sofrimento e muito aprendizado;</h2>        
    </div>
    <div className='container'>
      <article className='artigo1'>
        <h2>Perfil.</h2>
        <p>Me chamo Wittallo  Marcos Araújo, tenho 25 anos e sou estudante da área de T.I,
          futuramnte pretendo atuar e me especializar em desenvolvimeto web e database. Estas duas tecnologias, 
          de minha parte muito me impressionam, e sempre tive bastante curisosidade quanto a conhecê-las.
        </p>
        <p>Este pequeno projeto feito seguindo as diretrizes do React.</p>
        <p>Obrigado por acessar, deixe o seu feedback no email, que pode ser encontrado na página <strong>Sobre</strong></p>
      </article>
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