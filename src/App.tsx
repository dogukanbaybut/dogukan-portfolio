import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { CurrentlyBuilding } from './components/CurrentlyBuilding'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-bg bg-noise text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
