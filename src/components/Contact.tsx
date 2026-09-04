import { profile } from '../data/profile'
import './Contact.css'

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${profile.social.email}`
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-content">
          <h2>Let's Build More Secure Systems</h2>
          <p>I'm always interested in connecting with professionals in cybersecurity and discussing security challenges.</p>

          <div className="contact-methods">
            <button className="contact-card email-card" onClick={handleEmailClick}>
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>{profile.social.email}</p>
            </button>

            {profile.social.linkedin && (
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card linkedin-card">
                <div className="contact-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Connect on LinkedIn</p>
              </a>
            )}

            {profile.social.github && (
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="contact-card github-card">
                <div className="contact-icon">💻</div>
                <h3>GitHub</h3>
                <p>View My Projects</p>
              </a>
            )}
          </div>

          <div className="contact-footer-message">
            <p>Available for security consulting, penetration testing projects, and cybersecurity opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
