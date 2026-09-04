import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setIsDarkMode(savedTheme === 'dark')
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    const theme = newMode ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <div className="app" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
