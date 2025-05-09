import { useState } from 'react'
import "./App.css"

function App() {
  const [counter, setCounter] = useState(0)

  function add(){
    if (counter < 20) setCounter(counter + 1);
  }
  
  function subtract(){
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
    <div className='main-container'>
      <h3>Counter : {counter}</h3>
      <h3>Counter : {counter}</h3>
      <h3>Counter : {counter}</h3>
      <div>
        <button onClick={subtract}>SUBTRACT</button>
        <button onClick={add}>ADD</button>
      </div>
    </div>
    </>
  )
}

export default App
