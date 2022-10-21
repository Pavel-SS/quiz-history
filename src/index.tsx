import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Quiz } from './components/Quiz/Quiz';
import { QuizProvider } from './context/quiz';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz/>
    </QuizProvider>
  </React.StrictMode>
);


