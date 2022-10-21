import { useContext } from "react"
import { Button } from "../../common/Button/Button"
import { QuizContext } from "../../context/quiz"
import { Question } from "../Question/Question"


export const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log('Quiz: ' + quizState);
    const totalNumberQuestions = quizState.questions.length;
    const currentQuestion = (quizState.currentQuestionIndex + 1);
    return(
        <>
            <div>
                {quizState.showResults && (
                    <>
                        <h2>Done</h2>
                        <Button onClick={()=>dispatch({ type: 'Restart' })}>
                            Restart
                        </Button>
                    </>
                )}
                {!quizState.showResults && (<>
                    <div>Question {currentQuestion}/{totalNumberQuestions}</div>
                    <Question/>
                    <Button onClick={()=>dispatch({ type: 'Next_Question' })}>Next</Button>
                </>)}
            </div>
        </>
    )
}