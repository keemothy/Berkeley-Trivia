import "./index.css";
import Quiz from "./components/quiz";
import Results from "./components/results";
import { useState } from "react";

function App() {
  return (
    <div className="app-container">
      <h1> UC Berkeley Trivia </h1>

      <Quiz />
    </div>
  );
}

export default App;
