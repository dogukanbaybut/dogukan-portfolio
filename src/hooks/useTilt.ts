import { useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import type { MouseEvent, RefObject } from 'react'
import { usePointerFine } from './usePointerFine'

const MAX_TILT = 7

/** Subtle 3D tilt + cursor-following glare for a large visual panel. Mouse-only, respects reduced motion. */
export function useTilt(ref: RefObject<HTMLDivElement | null>) {
  const reduceMotion = useReducedMotion()
  const isFine = usePointerFine()
  const enabled = isFine && !reduceMotion

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glareOpacity = useMotionValue(0)

  const springRotateX = useSpring(rotateX, { damping: 22, stiffness: 220, mass: 0.5 })
  const springRotateY = useSpring(rotateY, { damping: 22, stiffness: 220, mass: 0.5 })
  const springGlareOpacity = useSpring(glareOpacity, { damping: 24, stiffness: 200 })
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(217, 255, 75, 0.1), transparent 60%)`

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width
    const relY = (e.clientY - rect.top) / rect.height

    rotateY.set((relX - 0.5) * 2 * MAX_TILT)
    rotateX.set(-(relY - 0.5) * 2 * MAX_TILT)
    glareX.set(relX * 100)
    glareY.set(relY * 100)
    glareOpacity.set(1)
  }

  const onMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    glareOpacity.set(0)
  }

  return { onMouseMove, onMouseLeave, rotateX: springRotateX, rotateY: springRotateY, glareOpacity: springGlareOpacity, glareBackground }
}
