import React from 'react';

type QuestionCardsPropsType = {
    question: string
    answers:string[]
    callback: any
    userAnswer: any
    questionNumber: number
    totalQuestions: number
}

export const QuestionCards: React.FC<QuestionCardsPropsType> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions
}) => {
    return (
        <>
            <p>
                Question: {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
} 