import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from './ui/Container'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  const socials = [
    { label: t('footer.email'), href: 'mailto:dogukan.baybut@gmail.com', icon: Mail },
    { label: 'GitHub', href: 'https://github.com/dogukanbaybut', icon: GithubIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/do%C4%9Fukan-baybut-a47430229/', icon: LinkedinIcon },
  ]

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 font-mono text-xs uppercase tracking-[0.12em] sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-ink">Doğukan Baybut</p>
          <p className="mt-1 text-ink-faint normal-case tracking-normal">{t('footer.tagline')}</p>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              data-cursor={t('cursor.open')}
              aria-label={social.label}
              className="text-ink-muted transition-colors hover:text-accent"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="text-ink-faint">© {year} Doğukan Baybut</p>
      </Container>
    </footer>
  )
}
