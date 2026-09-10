import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { usePointerFine } from '../../hooks/usePointerFine'

const EMAIL = 'dogukan.baybut@gmail.com'
const MAX_OFFSET = 8

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }
  const el = document.createElement('textarea')
  el.value = text
  el.style.position = 'fixed'
  el.style.opacity = '0'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export function EmailCTA() {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()
  const isFine = usePointerFine()
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 20, stiffness: 260, mass: 0.4 })
  const springY = useSpring(y, { damping: 20, stiffness: 260, mass: 0.4 })

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !isFine || !linkRef.current) return
    const rect = linkRef.current.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    x.set(relX * 2 * MAX_OFFSET)
    y.set(relY * 2 * MAX_OFFSET)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const handleCopy = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      await copyToClipboard(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — the email link above still works
    }
  }

  return (
    <div className="flex flex-col items-start gap-5">
      <motion.a
        ref={linkRef}
        href={`mailto:${EMAIL}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: springX, y: springY }}
        data-cursor={t('cursor.email')}
        className="group inline-flex max-w-full items-center gap-3 font-display text-2xl font-medium leading-tight tracking-tight text-ink transition-colors duration-300 hover:text-accent sm:text-4xl lg:text-5xl"
      >
        <span className="max-w-full border-b-2 border-ink-faint pb-1 [overflow-wrap:anywhere] transition-colors duration-300 group-hover:border-accent">
          {EMAIL}
        </span>
        <motion.span
          className="inline-flex shrink-0"
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 4, y: -4 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <ArrowUpRight className="size-[0.6em]" aria-hidden="true" />
        </motion.span>
      </motion.a>

      <div aria-live="polite">
        <button
          type="button"
          onClick={handleCopy}
          data-cursor={t('cursor.copy')}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint transition-colors duration-300 hover:text-ink"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-accent" aria-hidden="true" />
              {t('contact.copied')}
            </>
          ) : (
            <>
              <Copy className="size-3.5" aria-hidden="true" />
              {t('contact.copyEmail')}
            </>
          )}
        </button>
      </div>
    </div>
  )
}
