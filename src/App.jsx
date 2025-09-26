import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {/* give global margin between navbar and content */}
        <div className="max-w-6xl mx-auto min-h-[75vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
      <footer className="mt-auto text-center p-4 border-t">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lucas Vandermaarel
          <br/>
          All resources are original or sourced from free-to-use, attribution free libraries
        </p>
      </footer>
    </div>
  );
}

export default App;
