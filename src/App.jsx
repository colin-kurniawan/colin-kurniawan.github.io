import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.10),_transparent_30%)] ">
      <Header />
      <main className="flex-1 overflow-y-auto flex flex-col">
        <div className="flex flex-col flex-1 min-h-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
