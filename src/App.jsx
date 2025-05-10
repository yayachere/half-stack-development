import { useState } from 'react'
import Exercise from './Exercise'

const App = () => {
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
 
  
  const handleNext = () => {
    selected !== 7 ? setSelected(selected + 1) : setSelected(0)
  }
  const handleVote = () => {
    const copy = [...votes] 
    copy[selected] += 1
    setVotes(copy)
    handleMostVotes()
  }
  const handleMostVotes = () => {
    const maxVotes = Math.max(...votes)
    const index = votes.indexOf(maxVotes)
    setMostVotes(index)
  }
 
  return (
    <div>
      <div className='anecdote-container'>
        <h1>Anecdotes of the Day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes!</p>
      </div>
      <div className='button-group'>   
      <button className='btn' onClick={handleVote}>Vote</button>
      <button className='btn' onClick={handleNext}>Next Anecdote</button>
      <h1>Anecdote with most Votes!</h1>
      {anecdotes[mostVotes]}
      <p>has {votes[mostVotes]} votes!</p>
      </div>
      <Exercise />
    </div>
  )
}

export default App