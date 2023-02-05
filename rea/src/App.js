import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";



function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="*" component={<Home />} />
          <Route path="/About" component={<About />} />
          <Route path="/Inscription" component={<Inscription />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App


