import { createContext, useReducer } from 'react';
import Questions from '../dados/Questions';


const Stages = ["Start", "Playing", "End"]

const initialState = {
    gameStage: Stages[0],
    Questions,
    currentQuestion:0,
}

const quizReducer = (state, action) => {
    console.log(state,action);
    
    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: Stages[1],
            };
             case "REORDER_QUESTIONS":
                const reorderedQuestions = Questions.sort(() => {
                    return Math.random() - 0,5;
                });
                console.log("Aparentemente deu tudo certo");
                return {
                    ...state,
                    Questions: reorderedQuestions,
                };

                case "CHANGE_QUESTION":
                    const nextQuestion = state.currentQuestion + 1;
                    let endGame = false;
                    if(!Questions[nextQuestion]) {
                        endGame = true;
                    }
                    return {
                        ...state,
                        currentQuestion: nextQuestion,
                        gameStage: endGame ? Stages [2] : state.gameStage,
                    };



            default:
                return state;
    }
};

export const QuizContext = createContext();
export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);
    
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};