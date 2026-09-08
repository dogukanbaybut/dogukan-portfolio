import { motion } from 'motion/react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary'

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: Variant
  icon?: ReactNode
  children: ReactNode
}

export function AnimatedButton({
  href,
  variant = 'primary',
  icon,
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  const base =
    'group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4'

  const styles =
    variant === 'primary'
      ? 'bg-ink text-bg hover:bg-accent-strong'
      : 'border border-border-strong text-ink hover:border-accent/60 hover:bg-surface'

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(base, styles, className)}
    >
      {children}
      <motion.span
        className="inline-flex"
        initial={{ x: 0 }}
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {icon ?? <ArrowRight className="size-4" aria-hidden="true" />}
      </motion.span>
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    )
  }

  return (
    <button type="button" {...props} className="inline-block bg-transparent p-0">
      {content}
    </button>
  )
}
