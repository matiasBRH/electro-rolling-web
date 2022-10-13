import React, {useState} from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RoutesApp from "./Routes/RoutesApp";
import CarritoContext from "./components/CarritoContext"

function App() {

  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])

  return (
    <CarritoContext.Provider value={{carrito, setCarrito}}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesApp />} />
      </Routes>
    </BrowserRouter>
    </CarritoContext.Provider>
  );
}

export default App;
