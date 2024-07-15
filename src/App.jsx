import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [ hello, sethello ] = useHello('hello')

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {count >2 &&
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>
        }
      {count > 2 && <p>Count is greater than 2</p>}
    </>
  )
}

export default App
