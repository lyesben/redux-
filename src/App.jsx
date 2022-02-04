import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Conter from './conponent/Conter';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Conter/>
    </div>
  )
}

export default App
