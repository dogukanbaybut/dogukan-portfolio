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
]
