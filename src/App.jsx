import {React} from "react"
import {BrowserRouter} from "react-router-dom"
import NavbarApp from "./components/NavbarApp"
// import HomeScreen from "./pages/HomeScreen"
// import Footer from "./components/Footer"
// import "./App.css"

function App() {

  return (

    <BrowserRouter>
      <NavbarApp/>
      {/* <HomeScreen/> */}
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
