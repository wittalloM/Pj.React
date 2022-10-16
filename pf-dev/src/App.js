
import './App.css';
import React from 'react';

import Titulo from './componentsUI/Titulo';
import Rodape from './components/Rodape.js';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     
      <main>
      <Header />
      <Titulo texto='E lá vamos nós'/>
      </main>
      <br></br>
        <footer>
        <Rodape texto="Redes"/>
        </footer>
     </div>
  );
}

export default App;
