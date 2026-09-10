import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Container } from './ui/Container'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'

export function CurrentlyBuilding() {
  const { t } = useTranslation()
  const focuses = t('currentlyBuilding.focuses', { returnObjects: true }) as string[]

  return (
    <MotionSection id="focus">
      <Container>
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
        >
          {t('currentlyBuilding.eyebrow')}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-6 max-w-3xl text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-5xl"
        >
          {t('currentlyBuilding.heading')}
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
