import { useState } from 'react'
import Exercise from './Exercise'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    handleAverage()
    handlePositive()
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    handleAverage()
    handlePositive()
  }

 const handleAverage = () => {
    setAverage((good - bad) / (good + neutral + bad))
  }
  const handlePositive = () => {
    setPositive(Math.round((good / (good + neutral + bad)) * 100))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all : {good + neutral + bad} feedbacks!</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
      <Exercise />
    </div>
  )
}

export default App