import bolus1 from '../assets/bolusapp/screen-1.png'
import bolus2 from '../assets/bolusapp/screen-2.png'
import bolus3 from '../assets/bolusapp/screen-3.png'
import bolus4 from '../assets/bolusapp/screen-4.png'
import bolus5 from '../assets/bolusapp/screen-5.png'

export interface ProjectMeta {
  /** Portrait phone screenshots shown in the project panel. */
  images?: string[]
  technologies: string[]
  size: 'large' | 'medium' | 'small'
  githubUrl?: string
  liveUrl?: string
}

export interface Project extends ProjectMeta {
  name: string
  category: string
  description: string
  highlights?: string[]
}

/** Language-independent project data, aligned by index with `projects.items` in the translation files. */
export const projectsMeta: ProjectMeta[] = [
  {
    technologies: ['React Native', 'Firebase', 'TypeScript', 'OCR'],
    size: 'large',
    images: [bolus1, bolus2, bolus3, bolus4, bolus5],
  },
]
