export interface ProjectMeta {
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
  },
]
