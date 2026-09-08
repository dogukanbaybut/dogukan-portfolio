import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { fadeUp } from './motionVariants'

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
