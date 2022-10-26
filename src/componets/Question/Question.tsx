import { useContext } from "react"
import { QuizContext } from "../../bll/context"
import { Answer } from "../Answer/Answer"


export const Question = () => {
    const {state, dispatch} = useContext(QuizContext)
    const currentQuestion = state.questions[state.currentQuestionIndex];
    // const answersList = [state.answers., ...state.answers.incorrectAnswers]

    return (
        <>
            <h2>{currentQuestion.question}</h2>
            <ul>
                {
                  state.answers.map((a,i)=> (
                    <Answer 
                        key={i}
                        index={i}
                        answerTxt={a}
                        answerCorrect={currentQuestion.correctAnswer}
                        answerCurrent={state.currentAnswer}
                        selectAnswer={(answer:string)=>dispatch({type:'ASNWER_SELECT', payload: answer})}
                    />))

                }
            </ul>
            <button onClick={()=>{}}>Click</button>
        </>
    )
}