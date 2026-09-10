import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'

interface Facet {
  n: string
  title: string
  description: string
}

export function About() {
  const { t } = useTranslation()
  const languages = t('about.languages', { returnObjects: true }) as string[]
  const facets = t('about.facets', { returnObjects: true }) as Facet[]

  return (
    <MotionSection id="about">
      <Container>
        <SectionHeading index="01" eyebrow={t('about.eyebrow')} title={t('about.title')} />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.p
            variants={fadeUp}
            className="text-balance font-display text-2xl font-medium leading-snug tracking-tight text-ink lg:col-span-7 lg:text-3xl"
          >
            {t('about.vision')}
          </motion.p>

          <motion.div variants={fadeUp} className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              {t('about.missionLabel')}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{t('about.mission')}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-faint">
              {languages.map((lng) => (
                <span key={lng}>{lng}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-border">
          {facets.map((facet) => (
            <motion.div
              key={facet.n}
              variants={fadeUp}
              className="group grid grid-cols-[3rem_1fr] items-baseline gap-6 border-b border-border py-6 sm:grid-cols-[3rem_14rem_1fr] sm:gap-10"
            >
              <span className="font-mono text-sm text-ink-faint">{facet.n}</span>
              <h3 className="font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                {facet.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-right">
                {facet.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
