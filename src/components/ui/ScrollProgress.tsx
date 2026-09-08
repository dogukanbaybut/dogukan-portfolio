import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()
  const scaleX = useSpring(
    scrollYProgress,
    reduceMotion ? { damping: 100, stiffness: 1000 } : { damping: 22, stiffness: 120, mass: 0.2 },
  )

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-accent"
    />
  )
}
