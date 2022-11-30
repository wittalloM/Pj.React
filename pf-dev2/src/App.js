import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { AiFillContacts,AiOutlineBars } from 'react-icons/ai';


import './App.css'
import Sobre from './Pages/Sobre'
import Home from './Pages/Home'


function App() {
  return (
    <BrowserRouter>
    <>

    <h3 className='titulo'>Info.</h3>
    
        <ul className='naveg'>
          <li className='iten'><Link to="/"><AiOutlineBars classname='icon1' size={25}></AiOutlineBars> Home</Link></li>
          <li className='iten'><Link to="/Sobre"><AiFillContacts size={28}></AiFillContacts>Sobre</Link></li>
          <li className='iten'><Link to="/teste"><AiFillContacts size={28}></AiFillContacts>Testes</Link></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Sobre" element={<Sobre />} />
          <Route exact path="/teste" element={<teste1 />} />
        </Routes>
    
   
    </>
    </BrowserRouter>
  )
}

export default App;
