import { Cpu, Flame, Smartphone, Sparkles } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { GlassCard } from './ui/GlassCard'
import { MotionSection } from './ui/MotionSection'

const facets = [
  {
    title: 'Computer Engineering',
    description: 'A formal foundation in algorithms, systems and software design.',
    icon: Cpu,
  },
  {
    title: 'React Native',
    description: 'Building cross-platform mobile apps with a native feel.',
    icon: Smartphone,
  },
  {
    title: 'Firebase & Backend',
    description: 'Realtime data, auth and secure multi-tenant architectures.',
    icon: Flame,
  },
  {
    title: 'Product Building',
    description: 'I care about the whole product, not just the code that ships it.',
    icon: Sparkles,
  },
]

export function About() {
  return (
    <MotionSection id="about">
      <Container>
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          <GlassCard className="md:col-span-2 md:row-span-2">
            <h3 className="text-xl font-semibold text-ink">About Me</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
              My vision is to become a skilled Mobile App Developer, specializing in React
              Native to build user-focused, high-performance and scalable mobile
              applications — while staying current with emerging technologies.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
              My mission is to continuously grow my knowledge and experience in the React
              Native ecosystem to produce modern, reliable and maintainable mobile apps —
              delivering real solutions for real users, and technical value to every project
              I&apos;m part of.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['React Native', 'Flutter', 'React.js', 'TypeScript', 'Firebase'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-ink-faint">
              <span>Turkish — Native</span>
              <span>English — B1</span>
            </div>
          </GlassCard>

          {facets.map((facet) => (
            <GlassCard key={facet.title}>
              <facet.icon className="size-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-semibold text-ink">{facet.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{facet.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
