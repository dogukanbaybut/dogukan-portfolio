import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

export function Preloader() {
  const reduceMotion = useReducedMotion()
  const [loading, setLoading] = useState(() => !reduceMotion)

  useEffect(() => {
    if (!loading) return
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => setLoading(false), 550)
    return () => clearTimeout(timer)
  }, [loading])

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = ''
    }
  }, [loading])

  if (reduceMotion) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-bg"
        >
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="block font-display text-xl uppercase tracking-tight text-ink sm:text-2xl"
            >
              Doğukan Baybut
            </motion.span>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-20 origin-left bg-accent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
