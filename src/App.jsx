import { useContext } from 'react'
import { QuizContext } from './context/quiz'
import Questions from './components/Questions'
import Welcome from './components/Welcome'
import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="App">
      <h1> Study Quiz </h1>
      {/* <Welcome /> */}
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  )
}

export default App
