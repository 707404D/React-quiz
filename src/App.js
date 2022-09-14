import { useState } from "react";
import "./index.scss";
import Game from "./components/Game";
import Result from "./components/Result";
import { questions } from "./data/questions";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const clickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          questions={questions}
          clickVariant={clickVariant}
        />
      ) : (
        <Result questions={questions} correct={correct} />
      )}
    </div>
  );
}

export default App;
