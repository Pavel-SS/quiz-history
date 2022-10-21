
import { QuizContext } from "../../context/quiz"

type AnswerPropsType = {
    answerText:string
    onSelectAnswer: any
    currentAnswer: string
    correctAnswer: string
    index: number
}

export const Answer: React.FC<AnswerPropsType> = ({answerText, onSelectAnswer, currentAnswer, correctAnswer, index}) => {
    const letterMapping = ['a','b','c','d']
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;

    const corrrectAnswerClass = isCorrectAnswer ? 'correct-answer': '';
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer': '';
    const disabledClass = currentAnswer ? 'disabled-answer':'';
    return (
        <li 
            className={`answer ${corrrectAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
            onClick={()=>onSelectAnswer(answerText)}>  
            <span className="answer-letter">{letterMapping[index]}</span>
            <span>{answerText}</span>
        </li>
    )
}