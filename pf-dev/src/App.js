import React from 'react';

import './App.css';


import Titulo from './componentsUI/Titulo';
import Rodape from './components/Rodape.js';
import Navbar from './components/Navbar';
import ArquivoTeste1 from './components/ArquivoTeste1.js'

function App() {
  return (
    <>
      <header>
      <Navbar className="Header" />
      </header>
      <br></br>
      
      <main>
      <Titulo texto='[ Curriculo Dev ]'/>
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
