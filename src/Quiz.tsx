import React, { useState } from 'react';
import { apiURL, Difficulty, QuestionState } from './API';
import { QuestionCards } from './components/QuestionCards';


const TOTAL_QUESSTIONS = 10;

type AnswerObj =  {
  question:string
  answer: string
  correct: boolean
  correctAnswer: string
}
const Quiz:React.FC = () => {

  const [loading, setLoading] = useState(false),
        [questions, setQuestions] = useState<QuestionState[]>([]),
        [number,setNumber] = useState(0),
        [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]),
        [score, setScore] = useState(0),
        [gameOver, setGameOver] = useState(true) 

  console.log(questions)

  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false)
    const newQuestions = await apiURL(TOTAL_QUESSTIONS, Difficulty.EASY)
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  const checkAnswer = ( e: React.MouseEvent<HTMLButtonElement>) => {
  }
  const nextQuestion = () => {
  }
  return (<div>
    <h1>History</h1>
    {gameOver || userAnswers.length === TOTAL_QUESSTIONS ? 
      <button className='start' onClick={startTrivia}>
        Start
      </button> : null
    }
    {!gameOver ? <p className='score'>Score:</p> : null }
    {loading &&  <p>Loading...</p>}
    {!loading && !gameOver &&
    <QuestionCards
      question = {questions[number].question} 
      answers = {questions[number].answers}
      callback = {checkAnswer}
      userAnswer = {userAnswers ? userAnswers[number]: undefined}
      questionNumber = {number + 1} 
      totalQuestions = {TOTAL_QUESSTIONS}
    /> 
    }
    <button className='next' onClick={nextQuestion}>Next</button>
  </div>)
};

export default Quiz;
