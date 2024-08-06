import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter > 25) {
      setCounter = 25
    }
    else if (counter < 25) {
      counter = counter + 1
      setCounter(counter)
    }
    
    
  }

  const removeValue = () => {
    if (counter < 0) {
      setCounter = 0
    }
    else if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
    <h1>Learn React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
