import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../bll/context';
import { Question } from '../Question/Question';

function Quiz() {
  const {state, dispatch} = useContext(QuizContext)

  const apiUrl = "https://opentdb.com/api.php?amount=13&category=23&type=multiple&encode=url3986"

  useEffect(()=>{
    if(state.questions.length > 0){
      return;
    }
    fetch(apiUrl).then((res) => res.json()).then((data) => {
      dispatch({type: 'LOAD_QUESTIN', payload: data.results})
    })
  })
  
  const nextQuestionOrReset = () => {
    state.showResult ? dispatch({type:'RESET'}):dispatch({type:'NEXT_QUESTION'})
  }
  return (
    <div className="quiz">
        {state.showResult && <>
          <h3>Done</h3> 
          <h2>Result {state.correctAnswerCount}/{state.questions.length}</h2>
         </>}
        {!state.showResult &&<>
          <h1>Historical Quiz</h1>
          <h4>Count Question {state.currentQuestionIndex+1}/3</h4>
          <Question/>
          
        </>}
        <button onClick={()=>nextQuestionOrReset()}>Next</button>
    </div>
  );
}

export default Quiz;

