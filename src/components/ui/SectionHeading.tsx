import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { fadeUp } from './motionVariants'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-ink-muted">
          {description}
        </motion.p>
      )}
    </div>
  )
}
