// import React from 'react'
import "./Welcome.css"
import { useContext } from "react" 
import Quiz from "../image/quiz.svg"
import { QuizContext } from "../context/quiz"

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  
  return (
    <div id='welcome'>
      <h2>BEM VINDO!!!</h2>
      <p>Clique em iniciar para começar o QUIZ</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={Quiz} alt='Iniciar o quiz' />
    </div>
  )
}

export default Welcome