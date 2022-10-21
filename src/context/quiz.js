import { createContext, useReducer } from 'react';

const InitialState = {
    question: [],
    currentQuestionIndex: 0
}
// export type InitialStateType = typeof InitialState

const reducer = (state, action) => {
    if(action.type === 'Next_Question')
    return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex
    }
}

export const QuizContext = createContext();
export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, InitialState)
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    )
}