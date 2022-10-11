import { useContext, useEffect } from 'react';
import {QuizContext} from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';
import FimdeJogo from './components/FimdeJogo';

import './App.css'

function App() {

 const [QuizState, dispatch] = useContext(QuizContext);

 return (
  <div id='app'>
    <h1 className='Titulo'>Quiz App</h1>
    {QuizState.gameStage === "Start" && <Welcome />}
    {QuizState.gameStage === "Playing" && <Question />}
    {QuizState.gameStage === "End" && <FimdeJogo />}
  </div>
 );
}

export default App;
