import React from 'react';
import { AnswerObj } from '../Quiz';
//style
import {AnswerContainer, AnswerBtn } from './QuestionCard.style';

type QuestionCardsPropsType = {
    question: string
    answers:string[]
    callback: ( e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObj | undefined
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
        <AnswerContainer>
            <p className=''>
                Question: {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map(answer => (
                    <AnswerBtn  
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button 
                            disabled={!!userAnswer} 
                            value={answer} 
                            onClick={callback}
                        >
                            <span dangerouslySetInnerHTML={{__html: answer}}></span>
                        </button>
                    </AnswerBtn>
                ))}
            </div>
        </AnswerContainer>
    )
} 