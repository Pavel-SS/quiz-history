import { createContext, useReducer } from 'react';
import { data } from '../data';

const InitialState = {
    questions: data,
    currentQuestionIndex: 0,
    showResult: false
}


const reducer = (state, action) => {
    if(action.type === 'Next_Question'){
        const showResults = 
            state.currentQuestionIndex === state.questions.length - 1;
        const currentQuestion = showResults 
                                ? state.currentQuestionIndex 
                                : state.currentQuestionIndex + 1;
        return {
            ...state,
            currentQuestionIndex: currentQuestion,
            showResults
        }
    }
    if (action.type = 'Restart'){
        return InitialState
    }
}

export const QuizContext = createContext();
export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, InitialState)
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    )
}