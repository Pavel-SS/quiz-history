import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../bll/context';
import { Question } from '../Question/Question';

function Quiz() {
  const {state, dispatch} = useContext(QuizContext)

  const apiUrl = "https://opentdb.com/api.php?amount=13&category=23&type=multiple&encode=url3986"

  useEffect(()=>{
    // debugger
 
    fetch(apiUrl).then((res) => res.json()).then((data) => {
      state.questions.push(data.results)
      dispatch({type: 'LOAD_QUESTIN', payload: data.results})
    })
  },[state.showResult])
  
  const nextQuestionOrReset = () => {
    console.log(state.showResult)
    state.showResult ? dispatch({type:'RESET'}):dispatch({type:'NEXT_QUESTION'})
  }
  return (
    <div className="quiz">
        {state.showResult && <>
          <h3>Done</h3> 
          <h2>Result {state.correctAnswerCount}/{state.questions.length}</h2>
         </>}
        {!state.showResult && state.answers.length > 0 && <>
          <h1>Historical Quiz</h1>
          <h4>Count Question {state.currentQuestionIndex+1}/{state.questions.length}</h4>
          <Question/>
        </>}
        <button onClick={()=>nextQuestionOrReset()}>Next</button>
    </div>
  );
}

export default Quiz;

