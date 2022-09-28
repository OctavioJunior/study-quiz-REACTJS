import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  console.log(quizState)

  return(
  <div id="questions">
    <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
    <h2>Pergunta atual</h2>
    <div className="options-container">
      <p>Opções:</p>
    </div>
    <button>Continuar</button>
  </div>
  )
}

export default Questions