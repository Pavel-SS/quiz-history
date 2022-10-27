import React, { useState } from 'react';
import { apiURL, Difficulty, QuestionState } from './API';
import { QuestionCards } from './components/QuestionCards';

//style
import {GlobalStyle, Wrapper} from './Quiz.style'

const TOTAL_QUESSTIONS = 10;

export type AnswerObj =  {
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
    if(!gameOver){
      //User answer
      const answer = e.currentTarget.value;
      // Chenk answer against  correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if asnwer is correct
      if(correct){
          setScore(point => point + 1);
       }
       // save answer in the array for user answers
       const answerOnbject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer   
       }
       setUserAnswers(prev => [...prev, answerOnbject])
    }
  }
  const nextQuestion = () => {
    //Move on to the next question if not the last question
    number === TOTAL_QUESSTIONS ? 
      setGameOver(true) : 
      setNumber(number + 1)
  }
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <h1 className='title'>Гiсторыя</h1>
        {gameOver || userAnswers.length === TOTAL_QUESSTIONS ?
        <button className='start' onClick={startTrivia}>
          Start
        </button> : null
        }
        {!gameOver ? <p className='score'>Score:{score}</p> : null }
        {loading && <p>Loading...</p>}
        {!loading && !gameOver &&
        <QuestionCards question={questions[number].question} answers={questions[number].answers} callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number]: undefined} questionNumber={number + 1}
          totalQuestions={TOTAL_QUESSTIONS} />
        }
        {!gameOver && !loading
        && userAnswers.length === number + 1
        && number !== TOTAL_QUESSTIONS - 1 ?
        <button className='next' onClick={nextQuestion}>
          Next
        </button> : null
        }
      </Wrapper>
    </>
  )
};

export default Quiz;
