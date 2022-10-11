import React from 'react';
import './FimdeJogo.css';
import Welldone from '../imagens/welldone.svg';

function FimdeJogo() {
  return (
    <div id='gameover'>
        <h2>Game Over !!</h2>
        <h3>Muito Obrigado por Testar o nosso pequeno jogo ;) !</h3>
        <button>Voltar ao Início</button>
        <img src={Welldone} alt="Fim de Jogo..." />
    </div>
  )
}

export default FimdeJogo