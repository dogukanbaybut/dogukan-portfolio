import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLenis } from 'lenis/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Full-screen image viewer. Rendered into <body> through a portal: the project panel has CSS
 * transforms (tilt/scale), which would otherwise trap `position: fixed` inside the panel.
 */
export function Lightbox({
  images,
  index,
  name,
  onClose,
  onChange,
}: {
  images: string[]
  index: number | null
  name: string
  onClose: () => void
  onChange: (index: number) => void
}) {
  const lenis = useLenis()
  const open = index !== null

  useEffect(() => {
    if (!open) return
    lenis?.stop()
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' && index < images.length - 1) onChange(index + 1)
      else if (e.key === 'ArrowLeft' && index > 0) onChange(index - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      lenis?.start()
    }
  }, [open, index, images.length, lenis, onClose, onChange])

  const navButton =
    'absolute top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-elevated/80 text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-0'

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md sm:p-10"
        >
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${name} ${index + 1}`}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-auto max-w-full rounded-3xl border border-border object-contain shadow-2xl"
          />

          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-border bg-bg-elevated/80 text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent sm:right-8 sm:top-8"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Previous"
            disabled={index === 0}
            onClick={(e) => {
              e.stopPropagation()
              onChange(index - 1)
            }}
            className={`${navButton} left-4 sm:left-8`}
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={index === images.length - 1}
            onClick={(e) => {
              e.stopPropagation()
              onChange(index + 1)
            }}
            className={`${navButton} right-4 sm:right-8`}
          >
            <ChevronRight className="size-6" />
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.14em] text-ink-muted">
            {index + 1} / {images.length}
          </span>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
