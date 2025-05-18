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
      <h2> You finished!</h2>
      <p className="score">
        Your Final Score: {score}/{questionBank.length}
        <p>
          {score === questionBank.length ? (
            <div>
              <h2>Berkeley Nerd!</h2>
              <img src={`${import.meta.env.BASE_URL}erm.gif`} />

            </div>
          ) : (
            <div>
              <h2>Almost There!</h2>
              <img src={`${import.meta.env.BASE_URL}long-tears.gif`} />

            </div>
          )}
        </p>
      </p>

      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
