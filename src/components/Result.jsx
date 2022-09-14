import React from "react";

const Result = ({ questions, correct }) => {
  return (
    <div>
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>
          Вы отгадали {correct} ответа из {questions.length}
        </h2>
        <a href="/">
          <button>Попробовать снова</button>
        </a>
      </div>
    </div>
  );
};

export default Result;
