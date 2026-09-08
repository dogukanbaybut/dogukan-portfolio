import { motion } from 'motion/react'
import { Briefcase } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <MotionSection id="experience">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative mt-14 max-w-2xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <div className="space-y-10">
            {experience.map((item) => (
              <motion.div key={item.company} variants={fadeUp} className="relative pl-12">
                <span className="absolute left-0 top-1 flex size-8 items-center justify-center rounded-full border border-border bg-bg-elevated">
                  <Briefcase className="size-3.5 text-accent" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-ink">{item.company}</h3>
                  <span className="font-mono text-xs text-ink-faint">{item.period}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-sm text-accent">{item.role}</p>
                  <span className="text-xs text-ink-faint">{item.location}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  )
}
