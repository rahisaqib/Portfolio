import { profile } from '../data/profile'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>{profile.bio}</p>
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-number">5+</div>
              <div className="highlight-label">Years in Cybersecurity</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">50+</div>
              <div className="highlight-label">Security Assessments</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">100+</div>
              <div className="highlight-label">Vulnerabilities Found</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
