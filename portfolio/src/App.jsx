import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact.jsx'
import Services from './pages/services.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
