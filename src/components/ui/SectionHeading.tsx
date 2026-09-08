import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { fadeUp } from './motionVariants'

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  index?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <motion.div
        variants={fadeUp}
        className={cn(
          'mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-faint',
          align === 'center' && 'justify-center',
        )}
      >
        {index && <span className="text-accent">{index}</span>}
        {eyebrow && <span>{eyebrow}</span>}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted">
          {description}
        </motion.p>
      )}
    </div>
  )
}
