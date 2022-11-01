import React from 'react';

import './App.css';


import Titulo from './componentsUI/Titulo';
import Rodape from './components/Rodape.js';
import Navbar from './components/Navbar';
import ArquivoTeste1 from './components/ArquivoTeste1.js'
import Home  from './components/Home'

function App() {
  return (
    <>
      <header>
      <Navbar className="Header" />
      </header>
    
      <main>
      <Titulo texto='[ Curriculo Dev ]'/>
      <Home />
      <ArquivoTeste1 />
      </main>
      <br></br>
      
      <footer>
        <Rodape className="footer" texto="Redes"/>
        </footer>
    </>     
  );
}

export default App;
