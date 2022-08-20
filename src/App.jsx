import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RoutesApp from "./Routes/RoutesApp";

function App() {
  return (
    

    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesApp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
