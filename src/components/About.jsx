import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { skills } from '../data/skills'

export default function About() {
  const { lang } = useLang()
  const tx = t[lang].about

  return (
    <section id="about">
      <div className="section-title">
        <h2>{tx.title}</h2>
      </div>
      <div className="about-container">
        <div className="about-text">
          <p dangerouslySetInnerHTML={{ __html: tx.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: tx.p2 }} />
        </div>
        <div className="skills-section">
          <h3>{tx.skills}</h3>
          <div className="skills">
            {skills.map(s => <span key={s} className="skill-badge">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
