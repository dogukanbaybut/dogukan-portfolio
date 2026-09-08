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
      <Container className="text-center">
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          Contact
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink sm:text-5xl"
        >
          Let&apos;s build something.
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-md text-base text-ink-muted">
          Have an idea, project or opportunity? Let&apos;s talk.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex justify-center">
          <AnimatedButton href="mailto:dogukan.baybut@gmail.com" icon={<Mail className="size-4" />}>
            Say hello
          </AnimatedButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-14 flex max-w-lg flex-wrap items-center justify-center gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent/60 hover:text-ink"
            >
              <link.icon className="size-4" />
              {link.label}
            </a>
          ))}
        </motion.div>
      </Container>
    </MotionSection>
  )
}
