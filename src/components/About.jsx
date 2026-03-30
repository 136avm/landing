import { skills } from '../data/skills'

export default function About() {
  return (
    <section id="about">
      <h2>Sobre mí</h2>
      <div className="about-container">
        <div className="about-text">
          <p>Soy un apasionado de la programación y la administración de sistemas. Me encanta crear <strong>productos digitales, laboratorios virtuales y herramientas técnicas</strong> que faciliten el aprendizaje, la práctica y la automatización de tareas en redes y sistemas. También me gusta mucho el mundo de <strong>IoT</strong> y sus aplicaciones en la <strong>Industria 4.0</strong>.</p>
          <p>Actualmente estoy cursando el <strong>Grado en Ingeniería Informática</strong> en la Universidad de Murcia, con mención en <strong>Tecnologías de la Información</strong>. Siempre busco mejorar mis habilidades y aprender nuevas tecnologías para crear soluciones útiles y reproducibles.</p>
        </div>
        <div className="skills-section">
          <h3>Mis habilidades</h3>
          <div className="skills">
            {skills.map(s => <span key={s} className="skill-badge">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
