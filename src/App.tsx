import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Гісторыя Беларусі
      </h1>
      <div>
        <input className='start-button' type="button" value='START' />
      </div>
      <div className='test-wrapper'>
          <h2>
            <p>
              Пытынне:
            </p>
             Якое небудзь пыттанне
          </h2>
          <div>
            <input className='question-input' type="radio" id='q1' value ='yes'/>
            <label htmlFor="q1"> нейкi адказ</label>
          </div>
          <div>
            <input className='question-input' type="radio" id='q2' value ='yes'/>
            <label htmlFor="q2"> нейкi адказ</label>
          </div>
          <div>
            <input className='question-input' type="radio" id='q3' value ='yes'/>
            <label htmlFor="q3"> нейкi адказ</label>
          </div>
          <input className='start-button' type="button" value='next question'/>
      </div>
      <div>
        <h2 className='result-title'>
          Правiльныя адказы
        </h2>
        <div className='result-count'>
          0
        </div>
        <input className='start-button' type="button" value='restart'/>
      </div>
    </div>
  );
}

export default App;
