// Imports do React
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Artigo1 from './Elementos/Artigo1';
import Perfil from './Pages/Perfil'
import Info from './Pages/Info';
import Contatos from './Pages/Contatos'
import Rodape from './Elementos/Rodape';


//Imports de estilo
import './App.css';


//Código do App
function App() {
  return (
    <BrowserRouter>

      <>
      <div className="App-cont">
        <div className='cabecalho'>
        <div className='Titulo'>
          <h2>Perfil - Dev</h2>
        </div> 

      <div className='B_naveg'>
        <ul className='Naveg'>
              <li className='item'><Link to='/'>Página Inicial</Link></li>
              <li className='item'><Link to='/Info'>Info</Link></li>
              <li className='item'><Link to='/contatos'>Contatos</Link></li>
              
        </ul>
      </div>
        </div>
    
    
     <Routes>
      <Route exact path='/'  />
      <Route exact path='/Info' element={<Info />} />
      <Route exact path='/Contatos' element={<Contatos />} />
     </Routes>
        <Perfil />
        <Artigo1 />
        <Rodape />
        
        </div>
      </>
      
    </BrowserRouter>
   
  )
}

export default App
