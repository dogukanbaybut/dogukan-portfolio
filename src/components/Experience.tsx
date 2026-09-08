import { motion } from 'motion/react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <MotionSection id="experience">
      <Container>
        <SectionHeading index="04" eyebrow="Experience" title="Where I've worked" />

        <div className="mt-16 border-t border-border">
          {experience.map((item) => (
            <motion.div
              key={item.company}
              variants={fadeUp}
              className="group grid grid-cols-1 gap-2 border-b border-border py-7 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-xs text-ink-faint">{item.period}</span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{item.role}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
              <span className="font-mono text-xs text-ink-faint sm:text-right">
                {item.location}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
