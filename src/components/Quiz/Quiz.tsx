import React, { useContext, useEffect } from "react"
import { Button } from "../../common/Button/Button"
import { QuizContext } from "../../context/quiz"
import { Question } from "../Question/Question"


export const Quiz = React.memo(() => {
    const [quizState, dispatch] = useContext(QuizContext);
    const totalNumberQuestions = quizState.questions.length;
    const currentQuestion = (quizState.currentQuestionIndex + 1);
    const apiURL = "https://opentdb.com/api.php?amount=13&category=23&type=multiple&encode=url3986"
    useEffect(()=>{
        if(quizState.questions.length > 0){
            return;
        }
        fetch(apiURL).then((res) => res.json()).then((data) => {
            console.log('data', data);
            dispatch({type: 'Loaded_Questions', payload: data.results})
        })
    });

    return(
        <>
            <div>
                {quizState.showResults && (
                    <>
                        <h2>Done</h2>
                        <h3>Result: {quizState.correctAnswerCount} of {quizState.questions.length}</h3>
                        <Button onClick={()=>dispatch({ type: 'Restart' })}>
                            Restart
                        </Button>
                    </>
                )}
                {!quizState.showResults && quizState.questions.length > 0 && (<>
                    <div>Question {currentQuestion}/{totalNumberQuestions}</div>
                    <Question/>
                    <Button onClick={()=>dispatch({ type: 'Next_Question' })}>Next</Button>
                </>)}
            </div>
        </>
    )
})