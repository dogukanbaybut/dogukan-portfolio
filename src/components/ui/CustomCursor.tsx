import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import { usePointerFine } from '../../hooks/usePointerFine'

export function CustomCursor() {
  const isFine = usePointerFine()
  const reduceMotion = useReducedMotion()
  const [label, setLabel] = useState<string | null>(null)
  const [active, setActive] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 30, stiffness: 300, mass: 0.4 })
  const springY = useSpring(y, { damping: 30, stiffness: 300, mass: 0.4 })

  const enabled = isFine && !reduceMotion

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('custom-cursor-active')
      return
    }

    document.body.classList.add('custom-cursor-active')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = (e.target as HTMLElement)?.closest<HTMLElement>('[data-cursor]')
      if (target) {
        setActive(true)
        const value = target.dataset.cursor
        setLabel(value && value.length > 0 ? value : null)
      } else {
        setActive(false)
        setLabel(null)
      }
    }

    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('pointermove', move)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: active ? (label ? 88 : 44) : 10,
        height: active ? (label ? 88 : 44) : 10,
        backgroundColor: '#f2f2f0',
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && (
        <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wide text-bg">
          {label}
        </span>
      )}
    </motion.div>
  )
}
