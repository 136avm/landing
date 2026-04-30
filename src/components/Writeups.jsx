import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

const platforms = ['HackTheBox', 'TryHackMe', 'VulnHub', 'Dockerlabs', 'HackMyVM', 'TheHackerLabs']

export default function Writeups() {
  const { lang } = useLang()
  const tx = t[lang].writeups

  return (
    <section id="writeups">
      <div className="inner">
        <div className="section-title">
          <h2>{tx.title}</h2>
        </div>
        <div className="writeups-container">
          <div className="writeups-stat">
            <span className="writeups-number">+16</span>
            <span className="writeups-label">{tx.label}</span>
          </div>
          <div className="writeups-info">
            <p>{tx.description}</p>
            <div className="writeups-platforms">
              {platforms.map(p => <span key={p} className="card-skill-badge">{p}</span>)}
            </div>
            <a href="https://blog.antoniovergara.es" target="_blank" rel="noopener noreferrer" className="btn-primary">
              {tx.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
