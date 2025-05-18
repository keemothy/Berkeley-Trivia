import Quiz from "./quiz";

function Results({ userAnswers, questionBank, restartQuiz }) {
  function getScore() {
    let finalScore = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });

    return finalScore;
  }

  const score = getScore();

  return (
    <div>
      <h2>You finished!</h2>
      <p className="score">
        Your Final Score: {score} / {questionBank.length}
      </p>

      {score === questionBank.length ? (
        <div>
          <h2>Berkeley Nerd!</h2>
          <img
            src={`${process.env.PUBLIC_URL}/nerd.gif`}
            alt="Full score nerd"
          />
        </div>
      ) : (
        <div>
          <h2>Almost There!</h2>
          <img
            src={`${process.env.PUBLIC_URL}/long-tears.gif`}
            alt="Almost there"
          />
        </div>
      )}

      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
