import { motion } from 'motion/react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { fadeUp } from './ui/motionVariants'

const facets = [
  {
    n: '01',
    title: 'Computer Engineering',
    description: 'A formal foundation in algorithms, systems and software design.',
  },
  {
    n: '02',
    title: 'React Native',
    description: 'Building cross-platform mobile apps with a native feel.',
  },
  {
    n: '03',
    title: 'Firebase & Backend',
    description: 'Realtime data, auth and secure multi-tenant architectures.',
  },
  {
    n: '04',
    title: 'Product Building',
    description: 'I care about the whole product, not just the code that ships it.',
  },
]

export function About() {
  return (
    <MotionSection id="about">
      <Container>
        <SectionHeading index="01" eyebrow="Vision & Mission" title="Who I am" />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.p
            variants={fadeUp}
            className="text-balance font-display text-2xl font-medium leading-snug tracking-tight text-ink lg:col-span-7 lg:text-3xl"
          >
            My vision is to become a skilled Mobile App Developer, specializing in{' '}
            <span className="text-accent">React Native</span> to build user-focused,
            high-performance and scalable mobile applications — while staying current with
            emerging technologies.
          </motion.p>

          <motion.div variants={fadeUp} className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Mission</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              To continuously grow my knowledge and experience in the React Native ecosystem to
              produce modern, reliable and maintainable mobile apps — delivering real solutions
              for real users, and technical value to every project I&apos;m part of.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-faint">
              <span>TR — Native</span>
              <span>EN — B1</span>
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
