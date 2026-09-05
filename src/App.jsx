import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Posts from './components/Posts'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

export default function App() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Posts />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
