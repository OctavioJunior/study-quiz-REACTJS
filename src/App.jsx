import { useContext } from 'react'
import { QuizContext } from './context/quiz'
import Questions from './components/Questions'
import Welcome from './components/Welcome'
import './App.css'
import { useEffect } from 'react'
import GameOver from './components/GameOver'


function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" })
  }, [])

  return (
    <div className="App">
      <h1> Study Quiz </h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
