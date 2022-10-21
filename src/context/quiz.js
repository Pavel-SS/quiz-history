import { createContext, useReducer } from 'react';

import { shuffleAnswers, normalizeQuestions } from '../helpers';

const InitialState = {
    questions: [],
    currentQuestionIndex: 0,
    showResult: false,
    answers: [],
    currentAnswer: '',
    correctAnswerCount: 0,
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'Select_Answer': {
            const correctAnswerCount = 
                action.payload === 
                state.questions[state.currentQuestionIndex].correctAnswer
                    ? state.correctAnswerCount + 1
                    : state.correctAnswerCount;
            return {...state, currentAnswer: action.payload, correctAnswerCount}
        }
        case 'Next_Question': {
            const showResults =
                state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ?
                state.currentQuestionIndex :
                state.currentQuestionIndex + 1;
            const answers = showResults ? [] :
                shuffleAnswers(state.questions[currentQuestionIndex])
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer:'',
            }
        }
        case 'Restart': {
            return InitialState
        }
        case 'Loaded_Questions': {
            const normalizeQuestion = normalizeQuestions(action.payload);
            console.log('Loaded_Questions: ', action.payload)
            return {
                ...state, questions: normalizeQuestion, answers: shuffleAnswers(normalizeQuestion[0])
            }
        }
        default: {
            return state;
        }
    }
}

export const QuizContext = createContext();
export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, InitialState)
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    )
}