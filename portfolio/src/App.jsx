import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact.jsx";
import Services from "./pages/services.jsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <NavBar />
        {/* give global margin between navbar and content */}
        <div className="mt-24 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
