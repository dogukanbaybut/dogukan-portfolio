export interface EducationItem {
  school: string
  degree: string
  period: string
  location: string
  details?: string[]
  ongoing?: boolean
}

export const education: EducationItem[] = [
  {
    school: 'Karamanoğlu Mehmetbey University',
    degree: 'Computer Engineering (B.Sc.)',
    period: '2023 — 2026',
    location: 'Karaman, Türkiye',
    ongoing: true,
  },
  {
    school: 'Mersin University',
    degree: 'Computer Programming (Associate Degree)',
    period: '2020 — 2022',
    location: 'Mersin, Türkiye',
    details: ['Computer Maintenance', 'Web Programming', 'Database Management', 'Visual Programming'],
  },
]
