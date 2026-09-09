import { ReactLenis } from 'lenis/react'
import { CustomCursor } from './components/ui/CustomCursor'
import { Preloader } from './components/ui/Preloader'
import { ScrollProgress } from './components/ui/ScrollProgress'
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
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        wheelMultiplier: 1,
        anchors: true,
      }}
    >
      <div className="relative min-h-screen bg-bg bg-noise text-ink">
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
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
    </ReactLenis>
  )
}

export default App
