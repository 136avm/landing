import { skills } from '../data/skills'

export default function About() {
  return (
    <section id="about">
      <div className="section-title">
        <h2>Sobre mí</h2>
      </div>
      <div className="about-container">
        <div className="about-text">
          <p>Me metí en el mundo del <strong>hacking ético</strong> hace unos años y desde entonces es lo que más me engancha. Me gusta entender cómo funcionan los sistemas por dentro, encontrar fallos y aprender a explotarlos de forma controlada. También tengo bastante experiencia en <strong>administración de sistemas</strong>, redes y entornos virtualizados, que al final es la base para entender bien la seguridad.</p>
          <p>Estoy cursando el <strong>Grado en Ingeniería Informática</strong> en la Universidad de Murcia, con mención en <strong>Tecnologías de la Información</strong>. Fuera de la carrera dedico tiempo a laboratorios de CTF, máquinas de plataformas como Hack The Box y a seguir sacando certificaciones ofensivas.</p>
        </div>
        <div className="skills-section">
          <h3>Habilidades</h3>
          <div className="skills">
            {skills.map(s => <span key={s} className="skill-badge">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
