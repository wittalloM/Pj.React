
import './App.css';
import React from 'react';

import Titulo from './componentsUI/Titulo';
import Rodape from './components/Rodape.js';
import Navbar from './components/Navbar';
import ArquivoTeste1 from './components/ArquivoTeste1.js'

function App() {
  return (
    <div className="App">
     
      <main>
      <Navbar className="Header" />
      <Titulo texto='E lá vamos nós'/>
      <ArquivoTeste1 />
      </main>
      <br></br>
        <footer>
        <Rodape className="footer" texto="Redes"/>
        </footer>
     </div>
  );
}

export default App;
