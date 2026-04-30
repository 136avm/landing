import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// import Portfolio from './components/Portfolio'
import Certifications from './components/Certifications'
import Writeups from './components/Writeups'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Writeups />
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
