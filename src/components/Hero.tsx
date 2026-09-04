import { profile } from '../data/profile'
import './Hero.css'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const handleContactClick = () => {
    setActiveSection('contact')
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting">Welcome to my portfolio</div>
          <h1 className="hero-title">
            I'm <span className="accent-text">{profile.name}</span>
          </h1>
          <p className="hero-subtitle">{profile.title}</p>
          <p className="hero-description">{profile.tagline}</p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={handleContactClick}>
              Get In Touch
            </button>
            <a href={profile.resume} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>

          <div className="hero-social">
            {profile.social.github && (
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                GitHub
              </a>
            )}
            {profile.social.linkedin && (
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                LinkedIn
              </a>
            )}
            {profile.social.email && (
              <a href={`mailto:${profile.social.email}`} title="Email">
                Email
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-image-container">
            {profile.profileImage && (
              <img src={profile.profileImage} alt={profile.name} className="profile-image" />
            )}
            <div className="profile-glow"></div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  )
}

export default Hero
