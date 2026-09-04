import { skills } from '../data/skills'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2>Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-container">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
