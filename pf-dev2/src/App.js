import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <>
    
        <ul className='naveg'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Sobre">Sobre</Link></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
    
    <div className="App">
     <h2>Teste de Navegação</h2>
    </div>
    </>
    </BrowserRouter>
  )
}

export default App;
