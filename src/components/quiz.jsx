import { useState } from "react";

import Results from "./results";

function Quiz() {
  const questionBank = [
    {
      question: "Who is teaching CS 61A for Fall 2025?",
      options: ["John DeNero", "Joshua Hug", "David Wagner", "Justin Yokota"],
      answer: "John DeNero",
    },
    {
      question: "Who is the current Chancellor?",
      options: ["Carol Christ", "Rich Lyons", "Nicholas Dirks"],
      answer: "Rich Lyons",
    },
    {
      question: "What is the most popular major?",
      options: [
        "Computer Science",
        "Economics",
        "Cellular Biology",
        "Data Science",
        "Molecular Cell Biology",
      ],
      answer: "Computer Science",
    },
    {
      question: "Where is 4.0 ball located?",
      options: [
        "In front of Campanile",
        "In front of Moffit Library",
        "In front of Haas Pavilion",
      ],
      answer: "In front of Campanile",
    },
    {
      question: "Which is the worst dining hall?",
      options: ["Clark Kerr", "Cafe 3", "Croads", "Foothill"],
      answer: "Croads",
    },
    {
      question: "How many libraries are there on campus?",
      options: ["43", "27", "16", "35", "12"],
      answer: "27",
    },
    {
      question: "What year was UC Berkeley founded?",
      options: ["1903", "1913", "1857", "1868"],
      answer: "1868",
    },
  ];

  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  }

  function handleNextQuestion() {
    if (currentQuestion < questionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  }

  function handlePreviousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function handleRestart() {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setQuizCompleted(false);
  }

  if (quizCompleted) {
    return (
      <Results
        userAnswers={userAnswers}
        questionBank={questionBank}
        restartQuiz={handleRestart}
      />
    );
  }

  return (
    <div>
      <h2> Question {currentQuestion + 1} </h2>
      <p className="question"> {questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          className={"option" + (currentAnswer === option ? " selected" : "")}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}
      
      <div className="nav-buttons">
        <button
          className="prev-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <button
          className="next-button"
          onClick={handleNextQuestion}
          disabled={!currentAnswer}
        >
          {currentQuestion === questionBank.length - 1 ? "Submit Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
