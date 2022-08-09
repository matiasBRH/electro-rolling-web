import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './Routes/RoutesApp' 
import NavbarApp from './components/NavbarApp'
// import Footer from './components/Footer'
import './App.css'

function App() {

  return (

    <BrowserRouter>
      <NavbarApp/>
    
      <RoutesApp/>
    </BrowserRouter>
  )
}

export default App
