import { normalizeQuestions, randomAnswers } from "../helper";
import { initialQuiz } from "./context"

export type State = typeof initialQuiz;

type Action = {
    type: string,
    payload: any
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "LOAD_QUESTIN": {
            const normalize = normalizeQuestions(action.payload);
            return {
                ...state, questions:normalize, answers:(action.payload)
            }
        }
        case "ASNWER_SELECT":{
            const correctAnswer = state.questions[state.currentQuestionIndex].correct_answer;
            const countCorrectAnswers = state.correctAnswerCount
            const correctAnswerCount = 
                action.payload === correctAnswer
                ? countCorrectAnswers + 1
                : countCorrectAnswers;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswerCount,
            };
        }
        case "NEXT_QUESTION":{
            const showResult = state.currentQuestionIndex + 1 === state.questions.length;
            const currentQuestionIndex = 
                showResult 
                ? state.currentQuestionIndex  
                : state.currentQuestionIndex + 1;
            const answers = showResult ? [] : state.questions[currentQuestionIndex]
            console.log(state)
            // console.log(...state.questions)
            return {...state, currentQuestionIndex, showResult, ...answers, currentAnswer:''}
        }
        case "RESET": {
            console.log(state)
            console.log(initialQuiz)
            return initialQuiz
        }
        default:{
            return state
        }
    }
}