export const experiences = [
  {
    id: 1,
    role: 'Cybersecurity Analyst',
    company: 'Your Company Name',
    duration: '2023 - Present',
    location: 'Remote/On-site',
    description: 'Conducting vulnerability assessments and penetration testing for web applications and network infrastructure.',
    responsibilities: [
      'Perform comprehensive vulnerability assessments and penetration tests',
      'Identify and document security vulnerabilities with risk analysis',
      'Provide remediation recommendations and security best practices',
      'Conduct security testing for authentication and authorization mechanisms',
      'Validate security controls and verify remediation effectiveness'
    ],
    technologies: ['Burp Suite', 'Metasploit', 'OWASP', 'Python', 'Kali Linux']
  }
]

export type Experience = typeof experiences[0]
