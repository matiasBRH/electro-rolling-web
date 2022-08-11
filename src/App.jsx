import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './Routes/RoutesApp'

import './App.css'


function App() {


  return (
    
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  )
}

export default App
