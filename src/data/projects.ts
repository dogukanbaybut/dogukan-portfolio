export interface Project {
  name: string
  category: string
  description: string
  technologies: string[]
  size: 'large' | 'medium' | 'small'
  githubUrl?: string
  liveUrl?: string
  /** Set true while real project details are still pending. */
  isPlaceholder?: boolean
  highlights?: string[]
}

export const projects: Project[] = [
  {
    name: 'BolusApp',
    category: 'Mobile Finance / React Native',
    description:
      'A React Native & Firebase mobile app that automates shared expense management and debt tracking between roommates, with real-time sync and OCR-based receipt scanning.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'OCR'],
    size: 'large',
    githubUrl: undefined,
    liveUrl: undefined,
    highlights: [
      'Secure multi-tenant architecture isolated by household ID, built on Firebase Firestore and Authentication',
      'Dynamic debt-calculation engine for instant net balances, with CSV export for financial reports',
      'Dark mode support and modular state management via Context API for a refined user experience',
    ],
  },
  {
    name: 'LinguaBox',
    category: 'EdTech / Flutter / AI',
    description:
      'A Flutter mobile app for English vocabulary learning and YDS exam preparation, using Google Gemini AI to generate dynamic tests, reading passages and sentence-completion exercises.',
    technologies: ['Flutter', 'Gemini AI', 'Firebase', 'Provider'],
    size: 'large',
    githubUrl: undefined,
    liveUrl: undefined,
    highlights: [
      'Google Gemini AI integration to generate dynamic tests, reading texts and sentence-completion exercises',
      'Local data persistence with Firebase and app-wide state management with Provider',
      'Responsive UI with dark mode support and interactive test systems',
    ],
  },
]
