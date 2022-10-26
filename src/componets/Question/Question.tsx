import { useContext } from "react"
import { QuizContext } from "../../bll/context"
import { Answer } from "../Answer/Answer"


export const Question = () => {
    const {state, dispatch} = useContext(QuizContext)
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const answersList = [state.questions[state.currentQuestionIndex].correct_answer, ...state.questions[state.currentQuestionIndex].incorrect_answers]
    console.log(answersList)
    return (
        <>
            <h2>{currentQuestion.question}</h2>
            <ul>
                {
                  answersList.map((a,i)=> (
                    <Answer 
                        key={i}
                        index={i}
                        answerTxt={a}
                        answerCorrect={currentQuestion.correct_answer}
                        answerCurrent={state.currentAnswer}
                        selectAnswer={(answer:string | string[])=>dispatch({type:'ASNWER_SELECT', payload: answer})}
                    />))
                }
            </ul>
            <button onClick={()=>{}}>Click</button>
        </>
    )
}