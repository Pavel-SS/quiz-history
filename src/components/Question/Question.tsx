import { useReducer, useContext } from "react"
import { Answer } from "../Answer/Answer"

type questionPropsType = {
    question: string[]
}

export const Question: React.FC<questionPropsType> = ({question}) => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(question)
    return (
        <div>
            <h2>Question???</h2>
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