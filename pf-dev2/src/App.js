import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { BsFillFileCodeFill } from 'react-icons/bs';
import {AiFillContacts} from 'react-icons/ai';

import './App.css';
import Sobre from './Pages/Sobre';
import Home from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
    <>
    
        <ul className='naveg'>
          <li className='iten'><Link to="/"><BsFillFileCodeFill classname='icon1' size={28}></BsFillFileCodeFill> Home</Link></li>
          <li className='iten'><Link to="/Sobre"><AiFillContacts size={28}></AiFillContacts>Sobre</Link></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Sobre" element={<Sobre />} />
        </Routes>
    
    <div className="App">
     <h2>Teste de Navegação</h2>
    </div>
    </>
    </BrowserRouter>
  )
}

export default App;
