import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './componets/Quiz/Quiz';
import './index.css';
import { QuizProvider } from './bll/context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <QuizProvider>
      <Quiz/>
    </QuizProvider>
);


