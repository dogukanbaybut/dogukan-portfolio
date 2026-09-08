import { motion } from 'motion/react'
import { Container } from './ui/Container'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'

const focuses = [
  'React Native Ecosystem',
  'Firebase & Realtime Architectures',
  'Native Modules & Performance',
  'Modern Mobile UX',
]

export function CurrentlyBuilding() {
  return (
    <MotionSection id="focus">
      <Container>
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
        >
          06 — Currently Building
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-6 max-w-3xl text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-5xl"
        >
          Deepening my React Native expertise and exploring Firebase-backed architectures for
          scalable mobile products.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted"
        >
          {focuses.map((focus, i) => (
            <span key={focus} className="inline-flex items-center gap-2">
              {i > 0 && <span className="text-accent">/</span>}
              {focus}
            </span>
          ))}
        </motion.div>
      </Container>
    </MotionSection>
  )
}
