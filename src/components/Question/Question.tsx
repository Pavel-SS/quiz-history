
import React, { useContext } from "react"
import { QuizContext } from "../../context/quiz"
import { Answer } from "../Answer/Answer"


export const Question = React.memo(() => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    console.log('Questions: ', quizState)
    return (
        <div>
            <h2>{currentQuestion.question}</h2>
            <ul>
                {quizState.answers.map((answer:string, index:any) => (
                    <Answer
                        key={index}
                        index={index}
                        answerText={answer}
                        currentAnswer = {quizState.currentAnswer} 
                        correctAnswer = {currentQuestion.correctAnswer}
                        onSelectAnswer = {(answerText:string) => 
                            dispatch({type: 'Select_Answer', payload: answerText})}
                    />
            ))}
            </ul>
        </div>
    )
})