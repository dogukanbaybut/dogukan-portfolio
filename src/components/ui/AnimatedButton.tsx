import { motion } from 'motion/react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Magnetic } from './Magnetic'

type Variant = 'primary' | 'secondary' | 'ghost'

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: Variant
  icon?: ReactNode
  cursorLabel?: string
  children: ReactNode
}

export function AnimatedButton({
  href,
  variant = 'primary',
  icon,
  cursorLabel,
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  const base =
    'group relative inline-flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4'

  const styles: Record<Variant, string> = {
    primary: 'rounded-full bg-ink px-7 py-4 text-bg hover:bg-accent',
    secondary: 'rounded-full border border-border-strong px-7 py-4 text-ink hover:border-accent',
    ghost: 'border-b border-ink-faint px-0 py-2 text-ink hover:border-accent',
  }

  const content = (
    <span className={cn(base, styles[variant], className)}>
      {children}
      <motion.span
        className="inline-flex"
        initial={{ x: 0, y: 0 }}
        whileHover={{ x: 3, y: -3 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {icon ?? <ArrowUpRight className="size-4" aria-hidden="true" />}
      </motion.span>
    </span>
  )

  const inner = href ? (
    <a href={href} data-cursor={cursorLabel} className="inline-block">
      {content}
    </a>
  ) : (
    <button type="button" {...props} data-cursor={cursorLabel} className="inline-block bg-transparent p-0">
      {content}
    </button>
  )

  return (
    <Magnetic className="inline-block" strength={0.3}>
      {inner}
    </Magnetic>
  )
}
