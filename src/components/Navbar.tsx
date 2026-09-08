import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './ui/Container'
import { Magnetic } from './ui/Magnetic'
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
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled ? 'border-border bg-bg/85 backdrop-blur-xl' : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex items-center justify-between py-5">
        <a
          href="#top"
          data-cursor="Top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          doğukan<span className="text-accent">.</span>baybut
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="Go"
              className="group relative font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <Magnetic className="hidden md:inline-block" strength={0.4}>
          <a
            href="#contact"
            data-cursor="Talk"
            className="border-b border-ink-faint pb-0.5 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Let&apos;s Talk
          </a>
        </Magnetic>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center border border-border p-2 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-bg/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-1 py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 border-t border-border px-1 py-3 font-mono text-sm uppercase tracking-[0.1em] text-ink"
              >
                Let&apos;s Talk
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
