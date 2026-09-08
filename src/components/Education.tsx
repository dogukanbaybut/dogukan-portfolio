import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'
import { education } from '../data/education'

export function Education() {
  return (
    <MotionSection id="education">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <motion.div
              key={item.school}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong"
            >
              <div className="flex items-start justify-between">
                <GraduationCap className="size-5 text-accent" strokeWidth={1.5} />
                {item.ongoing && (
                  <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent-strong">
                    In progress
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{item.school}</h3>
              <p className="mt-1 text-sm text-ink-muted">{item.degree}</p>
              <p className="mt-3 font-mono text-xs text-ink-faint">
                {item.period} · {item.location}
              </p>
              {item.details && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-xs text-ink-muted"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
