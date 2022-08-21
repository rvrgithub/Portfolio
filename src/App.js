import "./App.css"
import { AboutSection } from "./Components/AboutSection"
import { ContactSection } from "./Components/ContactSection"
import { HeroSection } from "./Components/HeroSection"
import { Navbar } from "./Components/Navbar"
import { Project } from "./Components/Project"
import { SkillsSection } from "./Components/SkillsSection"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Project/>
      <ContactSection />
    </div>
  )
}

export default App
