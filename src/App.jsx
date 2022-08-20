import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RoutesApp from "./Routes/RoutesApp";

function App() {
  return (
    

    <BrowserRouter>
      <Routes>
      <NavbarApp/>
      <RoutesApp/>
      <Footer/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
