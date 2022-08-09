import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import RoutesApp from './Routes/RoutesApp'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <RoutesApp>
      <Route/>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/registro" element={<RegisterScreen />} />
    </RoutesApp>
    </BrowserRouter>
  )
}

export default App
