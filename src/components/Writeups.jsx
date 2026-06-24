import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

const platforms = ['HackTheBox', 'TryHackMe', 'VulnHub', 'Dockerlabs', 'HackMyVM', 'TheHackerLabs']

const profileLinks = [
  {
    name: 'Hack The Box',
    url: 'https://app.hackthebox.com/users/3004873',
    logo: '/assets/htb.png',
    color: '#9fef00',
  },
  {
    name: 'TryHackMe',
    url: 'https://tryhackme.com/p/avmsec',
    logo: '/assets/thm.png',
    color: '#e31837',
  },
]

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
            <div className="writeups-profiles">
              {profileLinks.map(({ name, url, logo, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  style={{ '--profile-accent': color }}
                >
                  <img src={logo} alt={name} width="18" height="18" style={{ objectFit: 'contain', flexShrink: 0 }} />
                  <span>{tx.viewProfile} {name}</span>
                </a>
              ))}
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
