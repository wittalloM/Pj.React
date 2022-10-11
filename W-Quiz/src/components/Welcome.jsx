  import React from 'react';
  import Quiz from '../imagens/quiz.svg';
  import { useContext } from 'react';
  import { QuizContext } from '../context/quiz';
  const Welcome = () => {
    
    const [QuizState, dispatch] = useContext(QuizContext);
    console.log(QuizState);
    
    return (
      <div id='BemVindo'>
        <h2>Seja bem Vindo</h2>
        <p>Clique no botão abaixo para iniciar o Quizz</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE" })}>Vamos Começar ?</button>
        <img src={Quiz} alt="Início do jogo" />
      </div>
    );
  };
  
  export default Welcome;