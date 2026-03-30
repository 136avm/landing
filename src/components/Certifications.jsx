import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="inner">
        <div className="section-title">
          <h2>Certificaciones</h2>
        </div>
        <div className="certs-grid">
          {certifications.map(cert => (
            <div key={cert.name} className="cert-card">
              <div className="cert-info">
                <h3>{cert.name}</h3>
                <span className="cert-issuer">{cert.issuer} · {cert.date}</span>
                <p>{cert.description}</p>
                <div className="cert-tags">
                  {cert.tags.map(t => <span key={t} className="card-skill-badge">{t}</span>)}
                </div>
                {cert.credential && (
                  <a href={cert.credential} target="_blank" rel="noopener noreferrer" className="repo-link">
                    Ver credencial
                  </a>
                )}
              </div>
              {cert.badge && (
                <img
                  src={cert.badge}
                  alt={`Badge ${cert.name}`}
                  className="cert-badge"
                  onError={e => { e.target.style.display = 'none' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
