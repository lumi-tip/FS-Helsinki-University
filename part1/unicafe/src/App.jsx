import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, count, average, positive } = props

  return (
    <>
      <h2>Statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ?
        <table>
          <tbody>
            <StatisticLine text={"Good"} value={good}/>
            <StatisticLine text={"Neutral"} value={neutral}/>
            <StatisticLine text={"Bad"} value={bad}/>
            <StatisticLine text={"All"} value={count}/>
            <StatisticLine text={"Average"} value={average}/>
            <StatisticLine text={"Positive"} value={positive}/>
          </tbody>
        </table>
        :
        <p>No feedback given</p>
      }
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function countFeedback() {
    return good + neutral + bad
  }

  function getFeedBackAverage() {
    let total = good + neutral + bad
    return ((good - bad) / total).toFixed(2)
  }

  function getPositivePercentage() {
    let total = good + neutral + bad
    return ((good / total) * 100).toFixed(2)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleClick={()=>setGood(prevState => prevState + 1)}/>
      <Button text="Neutral" handleClick={()=>setNeutral(prevState => prevState + 1)}/>
      <Button text="Bad" handleClick={()=>setBad(prevState => prevState + 1)}/>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        count={countFeedback()}
        average={getFeedBackAverage()}
        positive={getPositivePercentage()}
      />
    </div>
  )
}

export default App