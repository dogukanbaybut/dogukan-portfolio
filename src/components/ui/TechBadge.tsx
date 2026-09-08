import { cn } from '../../lib/utils'

export function TechBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs text-ink-muted',
        className,
      )}
    >
      {label}
    </span>
  )
}
