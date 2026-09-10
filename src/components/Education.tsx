import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'

interface EducationItem {
  school: string
  degree: string
  period: string
  location: string
  details?: string[]
  ongoing?: boolean
}

export function Education() {
  const { t } = useTranslation()
  const items = t('education.items', { returnObjects: true }) as EducationItem[]

  return (
    <MotionSection id="education">
      <Container>
        <SectionHeading index="05" eyebrow={t('education.eyebrow')} title={t('education.title')} />

        <div className="mt-16 border-t border-border">
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group grid grid-cols-1 gap-2 border-b border-border py-7 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-xs text-ink-faint">{item.period}</span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                    {item.school}
                  </h3>
                  {item.ongoing && (
                    <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                      {t('education.inProgress')}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ink-muted">{item.degree}</p>
                {item.details && (
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink-faint">
                    {item.details.map((detail, j) => (
                      <span key={j}>{detail}</span>
                    ))}
                  </div>
                )}
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
