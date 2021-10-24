import React from 'react';
import BasicQuestions from './App/slide-types/multiple-choice/BasicQuestions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicQuestions question="A Question Text"
          alternatives={["aaaa", "bbbb", "cccc", "dddd"]}
        />
      </header>
    </div>
  );
}

export default App;
