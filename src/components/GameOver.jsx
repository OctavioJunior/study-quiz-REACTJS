import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./GameOver.css"
import WellDone from "../image/welldone.svg"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="gameover">
      <h2>Fim do Quiz</h2>
      <p>Pontuação final: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <img src={WellDone} alt="final do jogo" />
      <button onClick={() => {dispatch({ type:"NEW_GAME"} )}}>Reiniciar</button>
    </div>    
  )
}

export default GameOver