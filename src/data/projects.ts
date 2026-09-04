export const projects = [
  {
    id: 1,
    name: 'Security Vulnerability Scanner',
    description: 'Automated vulnerability scanner for web applications built with Python and custom scanning modules.',
    shortDescription: 'Python-based web vulnerability scanner',
    focus: 'Web Application Security | Automation',
    technologies: ['Python', 'Flask', 'SQLite', 'JavaScript'],
    github: 'https://github.com/rahisaqib/vuln-scanner',
    demo: '',
    featured: true,
    order: 1
  }
]

export type Project = typeof projects[0]
