
import React, {createContext, useReducer} from "react";
import { reducer } from "./reducer";
import { questions } from "./data";
import { randomAnswers } from "../helper";


export const initialQuiz = {
    questions,
    currentQuestionIndex: 0,
    showResult: false,
    answers: randomAnswers(questions[0]),
    currentAnswer: '',
    correctAnswerCount: 0,
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
