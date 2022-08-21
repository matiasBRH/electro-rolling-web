import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RoutesApp from "./Routes/RoutesApp";

import RegistroScreen from "./pages/RegistroScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesApp />} />
      
        <Route path="/registro" element={<RegistroScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
