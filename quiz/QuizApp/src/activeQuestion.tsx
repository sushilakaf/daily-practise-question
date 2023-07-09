import { useState } from "react";
import { quiz } from "./quiz";
import "./App.css";

const QuizMcq = () => {
  const [listQuestion, setListQuestion] = useState(0);
  const [chooseAnswer, setChoosedAnswer] = useState(false);
  const [Resultdisplay, setResultdisplay] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [scoreRecord, setScore] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
  });

  const { questions } = quiz;
  const showCongratulatoryMessage = scoreRecord.score > 0;

  const onClickNext = () => {
    setScore((prev) =>
      chooseAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswer + 1,
          }
        : { ...prev, wrongAnswer: prev.wrongAnswer + 1 }
    );
    if (listQuestion !== questions.length - 1) {
      setListQuestion((prev) => prev + 1);
    } else {
      setListQuestion(0);
      setResultdisplay(true);
    }
  };
  const onAnswerSelected = (answer: any, index: any) => {
    setSelectedAnswerIndex(index);
    if (answer === questions[listQuestion].correctAnswer) {
      setChoosedAnswer(true);
    } else {
      setChoosedAnswer(false);
    }
  };
  const questionNumber = (number: any) => (number > 5 ? number : `0${number}`);
  return (
    
    <div className="container">
      <h1>Quiz App</h1>
      {!Resultdisplay ? (
        <div>
          <div>
            <span className="list-question">
              {questionNumber(listQuestion + 1)}
            </span>
            <span className="list-question-number">
              /{questionNumber(questions.length)}
            </span>
          </div>
          <h2>{questions[listQuestion].question}</h2>
          <ul>
            {questions[listQuestion].choice.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : undefined
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {listQuestion === questions.length - 1 ? "complete" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="showresult">
          <h3>{showCongratulatoryMessage ? "Congratulations!" : "Sorry!"}</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {scoreRecord.score}</span>
          </p>
          <p>
            Correct Answers:<span> {scoreRecord.correctAnswer}</span>
          </p>
          <p>
            Wrong Answers:<span> {scoreRecord.wrongAnswer}</span>
          </p>
        </div>
      )}
    </div>
   
  );
};

export default QuizMcq;
