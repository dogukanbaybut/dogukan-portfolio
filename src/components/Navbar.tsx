import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './ui/Container'
import { cn } from '../lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300',
            scrolled
              ? 'border-border bg-bg/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
              : 'border-transparent bg-transparent',
          )}
        >
          <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink">
            doğukan<span className="text-accent">.</span>baybut
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:bg-accent-soft md:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-border p-2 text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 overflow-hidden rounded-2xl border border-border bg-bg/95 backdrop-blur-xl md:hidden"
              aria-label="Mobile"
            >
              <div className="flex flex-col gap-1 p-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-lg border border-border-strong px-3 py-2.5 text-center text-sm font-medium text-ink"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}
