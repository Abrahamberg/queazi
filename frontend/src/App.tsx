import React from 'react';
import BasicQuestions from './App/slide-types/multiple-choice/BasicQuestions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicQuestions question={{ image: "img01.jpg", text: "What is the main question" }}

          alternatives={[{ image: "img01.jpg", text: "aaaaa aaaa aaa" },
          { image: "img02.jpg", text: "bbbb bbb bbbb" },
          { image: "img03.jpg", text: "ccc cccc ccc cccc ccc" }
          ]}
        />
      </header>
    </div>
  );
}

export default App;
