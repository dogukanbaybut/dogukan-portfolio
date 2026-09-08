import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { ProjectChapter } from './ProjectChapter'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <MotionSection id="projects">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Featured Projects"
          title="Things I've built"
          description="A selection of products and experiments — real problems, real code."
        />

        <div>
          {projects.map((project, i) => (
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
