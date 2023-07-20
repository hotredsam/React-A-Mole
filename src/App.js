import React, { useState } from "react";
import MoleContainer from "./MoleContainer";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const moles = new Array(9).fill(0);

  return (
    <div>
      <h1>Whack-a-mole! Score: {score}</h1>
      <div className="mole-grid">
        {moles.map((_, index) => (
          <div className="mole-container" key={index}>
            <MoleContainer score={score} setScore={setScore} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
