import { projects } from '../data/projects'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Proyectos</h2>
      <div className="slider">
        {projects.map(p => (
          <div key={p.title} className="card">
            <h3>{p.title}</h3>
            <img
              src={p.image}
              alt={p.title}
              className="project-image"
              onError={e => { e.target.style.display = 'none' }}
            />
            <p>{p.description}</p>
            <div className="card-skills">
              {p.skills.map(s => <span key={s} className="card-skill-badge">{s}</span>)}
            </div>
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="repo-link">
              Enlace al proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
