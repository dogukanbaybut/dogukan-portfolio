import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { staggerContainer } from './motionVariants'

export function MotionSection({
  id,
  children,
  className,
  stagger = 0.09,
}: {
  id?: string
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.section
      id={id}
      className={cn('relative py-24 sm:py-28 lg:py-32', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(stagger)}
    >
      {children}
    </motion.section>
  )
}
