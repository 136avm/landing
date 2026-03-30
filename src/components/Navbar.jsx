import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    const onMousedown = e => {
      if (!document.getElementById('navbar').contains(e.target)) setOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    document.addEventListener('mousedown', onMousedown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('mousedown', onMousedown)
    }
  }, [])

  const goTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="navbar-logo" onClick={() => goTo('hero')}>Antonio <span>Vergara</span></div>
      <button className="menu-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        {open ? '✕' : '☰'}
      </button>
      <div className={`nav-links${open ? ' open' : ''}`}>
        <button onClick={() => goTo('hero')}>Inicio</button>
        <button onClick={() => goTo('about')}>Sobre mí</button>
        <button onClick={() => goTo('certifications')}>Certificaciones</button>
        <button onClick={() => goTo('portfolio')}>Proyectos</button>
        <button onClick={() => goTo('contact')}>Contacto</button>
        <a href="https://blog.antoniovergara.es" target="_blank" rel="noopener noreferrer" className="nav-external">Hacking</a>
      </div>
    </nav>
  )
}
