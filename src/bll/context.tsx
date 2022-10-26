
import React, {createContext, useReducer} from "react";
import { reducer } from "./reducer";

export const initialQuiz = {
    questions: [] as questionsType[],
    currentQuestionIndex: 0,
    showResult: false,
    answers: [] as questionsType[],
    currentAnswer: '',
    correctAnswerCount: 0,
}
export type questionsType = {
    category:string
    type:string
    difficulty:string
    question:string 
    correct_answer:string 
    incorrect_answers:string[]
}

const initialValues = {
    state:initialQuiz,
    dispatch: (e:any)=>{}
}
type initialValuesType = typeof initialValues

export const QuizContext = createContext<initialValuesType>(initialValues)

type ChildrenProps = {
    children: React.ReactNode;
}

export const QuizProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialQuiz);
    return (
    <QuizContext.Provider value={{state: state, dispatch: (e)=>dispatch(e)}}>
        { children }
    </QuizContext.Provider>
    )
}
