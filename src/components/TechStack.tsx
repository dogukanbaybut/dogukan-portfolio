import { useTranslation } from 'react-i18next'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { technologyIcons } from '../data/technologies'

interface TechItem {
  name: string
  description: string
}

export function TechStack() {
  const { t } = useTranslation()
  const items = t('techStack.items', { returnObjects: true }) as TechItem[]
  const words = items.map((tech) => tech.name)
  const loop = [...words, ...words]

  return (
    <MotionSection id="tech-stack">
      <Container>
        <SectionHeading
          index="02"
          eyebrow={t('techStack.eyebrow')}
          title={t('techStack.title')}
          description={t('techStack.description')}
        />
      </Container>

      <div className="relative mt-16 w-full overflow-hidden border-y border-border py-6 mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-10 font-display text-4xl font-medium uppercase tracking-tight text-ink-faint transition-colors duration-300 hover:text-ink sm:text-5xl"
            >
              {name}
              <span className="text-accent" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </div>

      <Container>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          {items.map((tech) => {
            const Icon = technologyIcons[tech.name]
            return (
              <li key={tech.name} className="inline-flex items-center gap-2">
                {Icon && <Icon className="size-3.5 text-accent" strokeWidth={1.5} />}
                {tech.description}
              </li>
            )
          })}
        </ul>
      </Container>
    </MotionSection>
  )
}
