import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion"
import Deconnexion from "./componements/forms/Deconnexion"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Deconnexion" element={<Deconnexion />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
