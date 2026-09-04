import { experiences } from '../data/experience'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2>Professional Experience</h2>
        <p className="section-subtitle">Career history and security contributions</p>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="duration">{exp.duration}</span>
                </div>

                <p className="location">📍 {exp.location}</p>
                <p className="description">{exp.description}</p>

                <div className="experience-details">
                  <div className="details-section">
                    <h4>Responsibilities</h4>
                    <ul>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-section">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
