import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function scrambleOf(text: string) {
  return text.replace(/\S/g, () => randomChar())
}

export function ScrambleText({
  text,
  className,
  duration = 700,
  delay = 0,
}: {
  text: string
  className?: string
  duration?: number
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(() => (reduceMotion ? text : scrambleOf(text)))
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current || reduceMotion) return
    startedRef.current = true

    let rafId = 0
    let timeoutId = 0

    const run = () => {
      const startTime = performance.now()

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration)
        const revealedCount = Math.floor(progress * text.length)

        let next = ''
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') next += ' '
          else if (i < revealedCount) next += text[i]
          else next += randomChar()
        }
        setDisplay(next)

        if (progress < 1) {
          rafId = requestAnimationFrame(tick)
        } else {
          setDisplay(text)
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    timeoutId = window.setTimeout(run, delay)

    return () => {
      window.clearTimeout(timeoutId)
      cancelAnimationFrame(rafId)
    }
  }, [inView, text, duration, delay, reduceMotion])

  return (
    <span className={className}>
      <span ref={ref} aria-hidden="true">
        {display}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}
