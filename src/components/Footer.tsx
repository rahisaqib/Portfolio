import { profile } from '../data/profile'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <h3>Saqib Rahi</h3>
            <p>{profile.title}</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social</h4>
            <ul>
              {profile.social.github && (
                <li><a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              )}
              {profile.social.linkedin && (
                <li><a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              )}
              {profile.social.email && (
                <li><a href={`mailto:${profile.social.email}`}>Email</a></li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
