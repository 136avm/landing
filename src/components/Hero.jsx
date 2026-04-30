import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

const FALLBACK_SVG = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250'><rect width='250' height='250' rx='125' fill='%234a7cf7' opacity='.2'/><text x='125' y='135' font-size='80' text-anchor='middle' fill='%234a7cf7' font-family='Inter'>AV</text></svg>"

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang].hero

  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">{tx.eyebrow}</p>
        <h1>Antonio Vergara</h1>
        <p className="hero-subtitle">{tx.subtitle}</p>
        <div className="hero-buttons">
          <a href="https://blog.antoniovergara.es" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {tx.writeups}
          </a>
          <a href="/assets/CV%20Antonio%20Vergara.pdf" download className="btn-secondary">
            {tx.cv}
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
