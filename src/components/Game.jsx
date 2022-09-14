import React from "react";

const Game = ({ questions, question, clickVariant, step }) => {
  const percent = Math.round((step / questions.length) * 100);
  return (
    <div>
      <>
        <div className="progress">
          <div
            style={{ width: `${percent}%` }}
            className="progress__inner"
          ></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index) => (
            <li onClick={() => clickVariant(index)} key={text}>
              {text}
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default Game;
