import { normalizeQuestions, randomAnswers } from "../helper";
import { initialQuiz } from "./context"

export type State = typeof initialQuiz;

type Action = {
    type: string,
    payload: any
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
   
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
                : state.currentQuestionIndex+1;
            const answers = showResult ? [] : randomAnswers(state.questions[currentQuestionIndex])
            return {...state, currentQuestionIndex, showResult, ...answers, currentAnswer:''}
        }
        case "RESET": {
            return initialQuiz
        }
        case "LOAD_QUESTIN": {
            const normalize = normalizeQuestions(action.payload);
            console.log(normalize)
            return {
                ...state, questions:(action.payload), answers:action.payload
            }
        }
        default:{
            return state
        }
    }
}