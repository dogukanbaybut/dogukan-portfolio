import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import { Container } from './ui/Container'
import { MotionSection } from './ui/MotionSection'
import { AnimatedButton } from './ui/AnimatedButton'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { fadeUp } from './ui/motionVariants'

// NOTE: Replace with your real contact links.
const contactLinks = [
  { label: 'dogukan.baybut@gmail.com', href: 'mailto:dogukan.baybut@gmail.com', icon: Mail },
  { label: 'github.com/[username]', href: 'https://github.com', icon: GithubIcon },
  { label: 'linkedin.com/in/[username]', href: 'https://linkedin.com', icon: LinkedinIcon },
]

export function Contact() {
  return (
    <MotionSection id="contact">
      <Container>
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
        >
          07 — Contact
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-6 text-balance font-display text-[13vw] font-medium uppercase leading-[0.9] tracking-tighter text-ink sm:text-[8rem] lg:text-[9rem]"
        >
          Let&apos;s build.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col gap-10 border-t border-border pt-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-sm text-base leading-relaxed text-ink-muted">
            Have an idea, project or opportunity? Let&apos;s talk.
          </p>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <AnimatedButton
              href="mailto:dogukan.baybut@gmail.com"
              icon={<Mail className="size-4" />}
              cursorLabel="Email"
            >
              Say hello
            </AnimatedButton>

            <div className="flex flex-wrap gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  data-cursor="Open"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
                >
                  <link.icon className="size-3.5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </MotionSection>
  )
}
