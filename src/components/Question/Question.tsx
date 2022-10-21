
import { useContext } from "react"
import { QuizContext } from "../../context/quiz"
import { Answer } from "../Answer/Answer"


export const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    console.log('Questions: ', quizState)
    return (
        <div>
            <h2>{currentQuestion.question}</h2>
            <ul>
                <li>
                    <Answer/>
                </li>
                <li>
                    <Answer/>
                </li>
                <li>
                    <Answer/>
                </li>
            </ul>
        </div>
    )
}