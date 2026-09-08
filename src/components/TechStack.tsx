import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { technologies } from '../data/technologies'

export function TechStack() {
  const loop = [...technologies, ...technologies]

  return (
    <MotionSection id="tech-stack">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I reach for"
          description="A pragmatic set of technologies, chosen for reliability and developer experience."
        />
      </Container>

      <div className="group relative mt-14 mask-fade-x">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex w-64 shrink-0 items-center gap-4 rounded-2xl border border-border bg-surface p-5"
            >
              <tech.icon className="size-6 shrink-0 text-accent" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-sm font-medium text-ink">{tech.name}</p>
                <p className="text-xs text-ink-muted">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
