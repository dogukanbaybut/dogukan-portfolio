import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { Container } from './ui/Container'
import { Magnetic } from './ui/Magnetic'
import { cn } from '../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const links = [
    { label: t('navbar.links.about'), href: '#about' },
    { label: t('navbar.links.skills'), href: '#tech-stack' },
    { label: t('navbar.links.projects'), href: '#projects' },
    { label: t('navbar.links.experience'), href: '#experience' },
    { label: t('navbar.links.contact'), href: '#contact' },
  ]

  const toggleLang = () => i18n.changeLanguage(lang === 'en' ? 'tr' : 'en')
  const langOrder = lang === 'tr' ? (['tr', 'en'] as const) : (['en', 'tr'] as const)

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
          data-cursor={t('cursor.top')}
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          doğukan<span className="text-accent">.</span>baybut
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor={t('cursor.go')}
              className="group relative font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t('navbar.switchToTurkish')}
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
          >
            <span className={cn(lang === langOrder[0] && 'text-ink')}>{langOrder[0].toUpperCase()}</span>
            <span className="text-ink-faint">/</span>
            <span className={cn(lang === langOrder[1] && 'text-ink')}>{langOrder[1].toUpperCase()}</span>
          </button>

          <Magnetic className="inline-block" strength={0.4}>
            <a
              href="#contact"
              data-cursor={t('cursor.talk')}
              className="border-b border-ink-faint pb-0.5 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t('navbar.talk')}
            </a>
          </Magnetic>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t('navbar.switchToTurkish')}
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
          >
            <span className={cn(lang === langOrder[0] && 'text-ink')}>{langOrder[0].toUpperCase()}</span>
            <span className="text-ink-faint">/</span>
            <span className={cn(lang === langOrder[1] && 'text-ink')}>{langOrder[1].toUpperCase()}</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center border border-border p-2 text-ink"
            aria-label={open ? t('navbar.closeMenu') : t('navbar.openMenu')}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
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
                {t('navbar.talk')}
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
