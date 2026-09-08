import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { staggerContainer } from './motionVariants'

export function MotionSection({
  id,
  children,
  className,
  stagger = 0.09,
  divider = true,
}: {
  id?: string
  children: ReactNode
  className?: string
  stagger?: number
  divider?: boolean
}) {
  return (
    <motion.section
      id={id}
      className={cn(
        'relative py-24 sm:py-28 lg:py-36',
        divider && 'border-t border-border',
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer(stagger)}
    >
      {children}
    </motion.section>
  )
}
