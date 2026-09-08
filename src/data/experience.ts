export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'Xenovale Technology',
    role: 'Mobile Developer (Intern)',
    period: 'Jun 2026 — Present',
    location: 'Mersin, Türkiye',
    description:
      "Contributing to the company's web and mobile application development. Working on frontend development, UI improvements and technical tasks driven by project needs, while building individual software projects to grow expertise in modern web and mobile technologies.",
  },
  {
    company: 'Kardelen Yazılım',
    role: 'Mobile Developer (Intern)',
    period: 'Jul 2025 — Aug 2025',
    location: 'Mersin, Türkiye',
    description:
      'Built Flutter projects including patient registration and listing systems, OCR-based medical receipt/invoice scanning, and location tracking features.',
  },
  {
    company: 'Mersin University',
    role: 'Web Developer (Remote)',
    period: 'Jun 2022 — Jul 2022',
    location: 'Mersin, Türkiye',
    description: 'Remote internship at Mersin University focused on web design projects.',
  },
]
