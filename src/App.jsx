import {React} from "react"
import {BrowserRouter} from "react-router-dom"
import NavBar from "./components/NavBar"
import HomeScreen from "./pages/HomeScreen"
import Footer from "./components/Footer"
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <HomeScreen/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
