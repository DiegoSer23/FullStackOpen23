import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
    {text}
  </button>
  )
}

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <div>
        {props.text} : {props.count} %
      </div>
    )
  }
  return (
    <div>
      {props.text} : {props.count}
    </div>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        <StatisticLine text='good' count={props.good} /> 
        <StatisticLine text='neutral' count={props.neutral} />
        <StatisticLine text='bad' count={props.bad} />
        <StatisticLine text='all' count={props.all} />
        <StatisticLine text='average' count={props.average/props.all} />
        <StatisticLine text='positive' count={(props.good/props.all)*100} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setAverage(average + 1)
    setGood(updatedGood)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setAverage(average - 1)
    setBad(updatedBad)
    setAll(all + 1)
  }

  return (
    <div>
      <Header title='give feedback' />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} />
    </div>
  )
}

export default App
