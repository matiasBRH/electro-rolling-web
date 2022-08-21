import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./Routes/RoutesApp";
import NavbarApp from "./components/NavbarApp";
import Footer from "./components/Footer";

import "./App.css";


function App() {
  return (
    

    <BrowserRouter>
      <NavbarApp/>
      <RoutesApp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
