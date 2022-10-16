import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';
import './Estilo.css';

function App() {
    
  
            const  [input, setInput] = useState('');
            const  [cep, setCep] = useState({});

              async function handleSearch() {
              if(input === ''){
                alert('Digite um número de Cep válido')
                
              }
              try {
                const response =  await api.get(`${input}/json`);
                setCep(response.data)
                setInput('');
                
              } catch (error) {
                alert('Opps, Algo deu errado, tente novamente');
                setInput('');
                
              }
            }
            
              return (
              <div className='container'>
              <h1 className='Title'>Buscador de Cep</h1>

              <div className='container-input'>
                    
                    <input type='text' placeholder="Digite o Cep..."
                    value={input} onChange={(bc) => setInput(bc.target.value) } />
              <button className='bsearch' id='Pesquisa' onClick={handleSearch}>
                <FiSearch size={25} color='black' />
              </button>
              </div>
              {Object.keys(cep).length > 0 && (
                <main className='cont-principal'>
                    <h2>CEP: {cep.cep}</h2>
                    <span>Rua: {cep.logradouro}</span>
                    <span>Complemento: {cep.Complemento}</span>
                    <span>Bairro: {cep.bairro}</span>
                    <spam>Cidade/UF: {cep.localidade} - {cep.uf}</spam>
                </main>

              )}
                </div>
              
          )
            
            
            
       }


    export default App;
