import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import RoutesApp from './Routes/RoutesApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <RoutesApp/>
    </BrowserRouter>
  )
}

export default App
