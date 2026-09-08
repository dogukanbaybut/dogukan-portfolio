import { motion } from 'motion/react'
import { Component, Flame, Smartphone, Sparkles } from 'lucide-react'
import { Container } from './ui/Container'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'

const focuses = [
  { label: 'React Native Ecosystem', icon: Component },
  { label: 'Cross-Platform Mobile (Flutter)', icon: Smartphone },
  { label: 'Firebase & Realtime Architectures', icon: Flame },
  { label: 'Modern Mobile UX', icon: Sparkles },
]

export function CurrentlyBuilding() {
  return (
    <MotionSection id="focus">
      <Container>
        <div className="rounded-3xl border border-border bg-bg-elevated bg-grid p-8 sm:p-12">
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Currently Building
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-xl text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            Deepening my React Native expertise while exploring Flutter and Firebase-backed
            architectures for scalable mobile products.
          </motion.h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {focuses.map((focus) => (
              <motion.div
                key={focus.label}
                variants={fadeUp}
                className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2"
              >
                <focus.icon className="size-4 text-accent" strokeWidth={1.5} />
                <span className="text-sm text-ink-muted">{focus.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  )
}
