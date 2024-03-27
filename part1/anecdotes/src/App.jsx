import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  const [nvotes, setNvotes] = useState({0:0})
  const [selected, setSelected] = useState(0)
  const [winner, setWinner] = useState(0)

  // Takes a random number between 0 and the length of the arr. Then set that num to "selected"
  // while ensures "selected" to be different than the prev
  const handleClick = ()=> {
    let randInt = Math.floor(Math.random() * anecdotes.length)
    while (randInt === selected){
      randInt = Math.floor(Math.random() * anecdotes.length)
    }
    setNvotes({...nvotes, [randInt]: 0})
    setSelected(randInt)
  }

  const handleVote = () =>{
    setNvotes({...nvotes, [selected]: nvotes[selected] + 1})

    if(nvotes[selected] >= nvotes[winner]) setWinner(selected)
  }

  console.log(nvotes[selected])
  console.log(nvotes[winner])
  return (
    <div>
      <h1>Anecdote od the day</h1>
      {anecdotes[selected]}<br/>
      <p>has {nvotes[selected] ? nvotes[selected] : 0} votes</p>
      <button onClick={()=> handleVote()}>vote</button>
      <button onClick={()=> handleClick()}>next anecdote</button>

      {nvotes[winner] ?
      <>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[winner]}</p>
        <p>has {nvotes[winner]} votes</p>
      </>
      :
      ""
      }
    </div>
  )
}

export default App