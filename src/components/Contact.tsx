import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, FileText } from 'lucide-react'
import { Container } from './ui/Container'
import { MotionSection } from './ui/MotionSection'
import { EmailCTA } from './ui/EmailCTA'
import { ScrambleText } from './ui/ScrambleText'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { fadeUp } from './ui/motionVariants'

export function Contact() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const headline = t('contact.headline', { returnObjects: true }) as string[]
  const availability = t('contact.availability', { returnObjects: true }) as string[]

  const socialLinks = [
    { label: t('contact.socialLinks.github'), href: 'https://github.com/dogukanbaybut', icon: GithubIcon },
    {
      label: t('contact.socialLinks.linkedin'),
      href: 'https://www.linkedin.com/in/do%C4%9Fukan-baybut-a47430229/',
      icon: LinkedinIcon,
    },
    { label: t('contact.socialLinks.cv'), href: 'https://flowcv.com/resume/qujb5aqumswm', icon: FileText },
  ]

  return (
    <MotionSection id="contact" stagger={0.12}>
      <Container>
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
        >
          {t('contact.eyebrow')}
        </motion.p>

        <div className="mt-8 max-w-4xl">
          <motion.h2
            variants={fadeUp}
            className="text-balance font-display text-[15vw] font-medium uppercase leading-[0.88] tracking-tighter text-ink sm:text-[6.5rem] lg:text-[7.5rem]"
          >
            <ScrambleText key={lang} text={headline[0]} delay={150} />
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            className="text-balance font-display text-[15vw] font-medium uppercase leading-[0.88] tracking-tighter text-outline-accent sm:text-[6.5rem] lg:text-[7.5rem]"
          >
            <ScrambleText key={lang} text={headline[1]} delay={300} />
          </motion.h2>
        </div>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {t('contact.body')}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-14 border-t border-border pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            {t('contact.getInTouch')}
          </p>
          <div className="mt-5">
            <EmailCTA />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col gap-10 border-t border-border pt-10 sm:flex-row sm:items-start sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              {t('contact.availableFor')}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
              {availability.map((item, i) => (
                <span key={item} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="text-accent">/</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                data-cursor={t('cursor.open')}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                <social.icon className="size-3.5" />
                {social.label}
                <motion.span
                  className="inline-flex"
                  initial={{ x: 0, y: 0 }}
                  whileHover={{ x: 3, y: -3 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </motion.span>
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </MotionSection>
  )
}
