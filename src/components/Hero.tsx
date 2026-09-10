import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowDown } from 'lucide-react'
import { Container } from './ui/Container'
import { AnimatedButton } from './ui/AnimatedButton'
import { ScrambleText } from './ui/ScrambleText'

const focusWords = ['React Native', 'React.js', 'Firebase', 'TypeScript']

function CyclingFocus() {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % focusWords.length), 2200)
    return () => clearInterval(id)
  }, [reduceMotion])

  return (
    <span className="inline-grid align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={focusWords[index]}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="col-start-1 row-start-1 whitespace-nowrap text-accent"
        >
          {focusWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const headline = t('hero.headline', { returnObjects: true }) as string[]
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120])
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 pb-16"
    >
      <motion.div
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_70%_at_50%_20%,black,transparent)]"
      />

      <motion.div style={{ opacity: fade }} className="relative">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            <span>{t('hero.role')}</span>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              {t('hero.available')}
            </span>
          </div>
        </Container>
      </motion.div>

      <motion.div style={{ y: headlineY }} className="relative flex flex-1 flex-col justify-center">
        <div className="w-full">
          <h1 className="select-none whitespace-nowrap font-display font-medium uppercase leading-[0.86] tracking-tighter text-ink [font-size:clamp(3.4rem,13vw,10.5rem)]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block pl-6 sm:pl-10 lg:pl-16"
            >
              <ScrambleText key={lang} text={headline[0]} duration={1100} delay={200} />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block pl-6 text-outline-accent sm:pl-10 lg:pl-16"
            >
              <ScrambleText key={lang} text={headline[1]} duration={1100} delay={550} />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block pl-6 sm:pl-10 lg:pl-16"
            >
              <ScrambleText key={lang} text={headline[2]} duration={1100} delay={900} />
            </motion.span>
          </h1>
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-8 border-t border-border pt-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              {t('hero.intro')} <CyclingFocus />
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <AnimatedButton href="#projects" variant="primary" cursorLabel={t('cursor.view')}>
                {t('hero.viewWork')}
              </AnimatedButton>
              <AnimatedButton href="#contact" variant="ghost" cursorLabel={t('cursor.talk')}>
                {t('hero.contact')}
              </AnimatedButton>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      <Container>
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          <span>{t('hero.coordinates')}</span>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2"
          >
            {t('hero.scroll')} <ArrowDown className="size-3.5" aria-hidden="true" />
          </motion.span>
        </div>
      </Container>
    </section>
  )
}
