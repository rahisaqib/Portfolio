import './Expertise.css'

const Expertise = () => {
  const expertiseAreas = [
    {
      id: 1,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive identification and analysis of security vulnerabilities in applications and infrastructure.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Penetration Testing',
      description: 'Authorized security testing to identify and exploit vulnerabilities before attackers can.',
      icon: '⚔️'
    },
    {
      id: 3,
      title: 'Web Application Security',
      description: 'OWASP Top 10 testing, input validation, authentication, and authorization assessments.',
      icon: '🌐'
    },
    {
      id: 4,
      title: 'API Security',
      description: 'REST/GraphQL API security testing, authentication bypass, data exposure, and business logic flaws.',
      icon: '🔗'
    },
    {
      id: 5,
      title: 'Network Security',
      description: 'Network reconnaissance, enumeration, protocol analysis, and infrastructure security assessment.',
      icon: '🛡️'
    },
    {
      id: 6,
      title: 'Remediation & Retesting',
      description: 'Security control validation and verification of vulnerability fixes and security improvements.',
      icon: '✅'
    }
  ]

  return (
    <section id="expertise" className="expertise section">
      <div className="container">
        <h2>Cybersecurity Expertise</h2>
        <p className="section-subtitle">Areas of specialization and technical competence</p>

        <div className="expertise-grid">
          {expertiseAreas.map((area) => (
            <div key={area.id} className="expertise-card">
              <div className="expertise-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
