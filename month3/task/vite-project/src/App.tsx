import { useState } from 'react'
import './App.css'
import { appContainer, board, buttons } from './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={appContainer}>
      <div className={board}></div>
      <div className={buttons}>
        <button>

        </button>
      </div>
    </div>
  )
}

export default App
