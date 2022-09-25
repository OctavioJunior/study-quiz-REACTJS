import "./Welcome.css"
import React from 'react'
import Quiz from "../image/quiz.svg"

const Welcome = () => {
  return (
    <div id='welcome'>
      <h2>BEM VINDO!!!</h2>
      <p>Clique em iniciar para começar o QUIZ</p>
      <button>Iniciar</button>
      <img src={Quiz} alt='Iniciar o quiz' />
    </div>
  )
}

export default Welcome