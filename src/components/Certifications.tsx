import { certifications } from '../data/certifications'
import './Certifications.css'

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2>Certifications</h2>
        <p className="section-subtitle">Professional credentials and achievements</p>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className={`cert-card ${cert.featured ? 'featured' : ''}`}>
              <div className="cert-badge">📜</div>
              <h3>{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              {cert.credentialId && (
                <p className="cert-id">ID: {cert.credentialId}</p>
              )}
              {cert.verificationLink && (
                <a href={cert.verificationLink} target="_blank" rel="noopener noreferrer" className="cert-verify">
                  Verify Credential ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
