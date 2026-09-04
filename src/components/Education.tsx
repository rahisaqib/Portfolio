import { education } from '../data/education'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2>Education</h2>
        <p className="section-subtitle">Academic background and specialized training</p>

        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="edu-icon">🎓</div>
              <div className="edu-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="field">{edu.field}</p>
                {edu.specialization && (
                  <p className="specialization">Specialization: {edu.specialization}</p>
                )}
                <p className="dates">{edu.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
