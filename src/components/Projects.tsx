import { projects } from '../data/projects'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Real-world cybersecurity projects and tools</p>

        <div className="projects-grid">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <div className="project-focus">{project.focus}</div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub ↗
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
