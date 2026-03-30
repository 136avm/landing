const FALLBACK_SVG = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250'><rect width='250' height='250' rx='125' fill='%234a7cf7' opacity='.2'/><text x='125' y='135' font-size='80' text-anchor='middle' fill='%234a7cf7' font-family='Inter'>AV</text></svg>"

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Portafolio profesional</p>
        <h1>Antonio Vergara</h1>
        <p className="hero-subtitle">Estudiante de Ingeniería Informática · Junior Pentester y Especialista en IT</p>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver proyectos
          </button>
          <a href="/assets/CV%20Antonio%20Vergara.pdf" download className="btn-secondary">
            Descargar CV
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/assets/profile.jpg"
          alt="Antonio Vergara"
          onError={e => { e.target.onerror = null; e.target.src = FALLBACK_SVG }}
        />
      </div>
    </section>
  )
}
