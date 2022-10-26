type AnswerPropsType = {
    answerTxt:string | string[]
    index:number 
    answerCurrent?:string
    answerCorrect?:string | string[]
    selectAnswer: any
}

export const Answer: React.FC<AnswerPropsType> = ({answerTxt, index, answerCurrent, answerCorrect,selectAnswer}) => {

    const numberAnswersVariant = ['I','II','III','IV']

    const isCorrect = answerCorrect === answerTxt && answerCurrent ;
    const wrong = answerCurrent === answerTxt && answerCurrent !== answerCorrect;

    const correctAnswerClassStyle = isCorrect ? 'answer_correct' : '',
          wrongAnswerClassStyle = wrong ? 'answer_wrong' : '',
          disabledClassStyle = answerCurrent ? 'disabled_answer': '';

    return (
        <li 
            className={`answer 
                ${correctAnswerClassStyle} 
                ${wrongAnswerClassStyle} 
                ${disabledClassStyle}`}
            onClick={()=>selectAnswer(answerTxt)}
        >
           <span className='answer_num'>{numberAnswersVariant[index]}</span>
           <span className='answer_txt'>{answerTxt}</span>
        </li>
    )
}