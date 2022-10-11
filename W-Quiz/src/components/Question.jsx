import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import '../components/Question.css';
function Question() {
  const [QuizState, dispatch] = useContext(QuizContext);
  const currentQuestion = QuizState.Questions[QuizState.currentQuestion]

  return (
    <div id='Perguntas'>
      <h3>Pergunta {QuizState.currentQuestion + 1} de {QuizState.Questions.length}</h3>
      <h2>{currentQuestion.question}</h2>
      <div id='cxdeopcoes'>
        <h3>Opções</h3>
      </div>
      <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Próxima Pergunta</button>
    </div>
  )
}

export default Question;