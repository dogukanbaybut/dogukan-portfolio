import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, CircleDot, Code2, GitBranch, Terminal } from 'lucide-react'
import { Container } from './ui/Container'
import { AnimatedButton } from './ui/AnimatedButton'
import { fadeUp, staggerContainer } from './ui/motionVariants'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12)}
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-ink-muted"
          >
            Computer Engineering Student · Mobile App Developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Building mobile products that actually work.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            I specialize in React Native, building user-focused, high-performance and
            scalable mobile applications — with React.js and Flutter alongside it.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <AnimatedButton href="#projects" variant="primary">
              View My Work
            </AnimatedButton>
            <AnimatedButton href="#contact" variant="secondary">
              Let&apos;s Talk
            </AnimatedButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 inline-flex items-center gap-2 text-sm text-ink-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 rounded-3xl border border-border bg-bg-elevated bg-grid" />

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-6 top-8 w-48 rounded-xl border border-border bg-surface p-4 shadow-2xl shadow-black/40"
          >
            <div className="mb-3 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-ink-faint/50" />
              <span className="size-2 rounded-full bg-ink-faint/50" />
              <span className="size-2 rounded-full bg-ink-faint/50" />
            </div>
            <div className="space-y-1.5 font-mono text-[11px] text-ink-muted">
              <p>
                <span className="text-accent">const</span> build = () =&gt;
              </p>
              <p className="pl-3">ship(<span className="text-accent-strong">product</span>)</p>
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-24 right-4 flex w-40 items-center gap-2 rounded-xl border border-border bg-surface p-3 shadow-2xl shadow-black/40"
          >
            <Terminal className="size-4 shrink-0 text-accent" />
            <span className="font-mono text-[11px] text-ink-muted">deploy --prod</span>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-6 left-10 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 shadow-2xl shadow-black/40"
          >
            <GitBranch className="size-3.5 text-ink-muted" />
            <span className="font-mono text-[11px] text-ink-muted">main ✓</span>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute right-8 top-24 flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5"
          >
            <CircleDot className="size-3.5 text-accent" />
            <span className="font-mono text-[11px] text-accent-strong">status: live</span>
          </motion.div>

          <div className="absolute inset-x-10 top-1/2 flex -translate-y-1/2 items-center justify-center">
            <Code2 className="size-16 text-ink-faint/30" strokeWidth={1} />
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-x-0 bottom-10 hidden justify-center sm:flex"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-4 text-ink-faint" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}
