import { useTranslation } from 'react-i18next'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { ProjectChapter } from './ProjectChapter'
import { projectsMeta } from '../data/projects'
import type { Project } from '../data/projects'

interface ProjectText {
  name: string
  category: string
  description: string
  highlights?: string[]
}

export function Projects() {
  const { t } = useTranslation()
  const texts = t('projects.items', { returnObjects: true }) as ProjectText[]
  const items: Project[] = texts.map((text, i) => ({ ...text, ...projectsMeta[i] }))

  return (
    <MotionSection id="projects">
      <Container>
        <SectionHeading
          index="03"
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          description={t('projects.description')}
        />

        <div>
          {items.map((project, i) => (
            <ProjectChapter
              key={project.name}
              project={project}
              order={String(i + 1).padStart(2, '0')}
            />
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
