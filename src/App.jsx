import {BrowserRouter} from 'react-router-dom'
<<<<<<< HEAD
import RoutesApp from './Routes/RoutesApp'
=======
import RoutesApp from './Routes/RoutesApp' 
import NavbarApp from './components/NavbarApp'
import Footer from './components/Footer'


import './App.css'

>>>>>>> a856fa6950ee2b6906bd89d764e92f20577abe8c

import './App.css'


function App() {
<<<<<<< HEAD


  return (
    
    <BrowserRouter>
      <RoutesApp/>
=======

  return (

    <BrowserRouter>
      <NavbarApp/>
      <RoutesApp/>
      <Footer/>
>>>>>>> a856fa6950ee2b6906bd89d764e92f20577abe8c
    </BrowserRouter>
  )
}

export default App
