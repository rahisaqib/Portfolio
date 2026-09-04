export const certifications = [
  {
    id: 1,
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2023',
    credentialId: 'ECC12345678',
    verificationLink: 'https://verify.eccouncil.org/',
    featured: true
  }
]

export type Certification = typeof certifications[0]
