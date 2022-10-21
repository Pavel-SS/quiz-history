import { useReducer, useContext } from "react"
import { Button } from "../../common/Button/Button"
import { QuizContext } from "../../context/quiz"
import { Question } from "../Question/Question"


export const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log('value: ' + quizState);
    return(
        <>
            <div>
                <div>Question 1/8</div>
                <Question/>
                <Button onClick={()=>dispatch({ type: 'Next_Question' })}>Next</Button>
            </div>
        </>
    )
}