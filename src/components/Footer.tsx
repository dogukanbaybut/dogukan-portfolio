import { Mail } from 'lucide-react'
import { Container } from './ui/Container'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'

const socials = [
  { label: 'Email', href: 'mailto:dogukan.baybut@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 font-mono text-xs uppercase tracking-[0.12em] sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-ink">Doğukan Baybut</p>
          <p className="mt-1 text-ink-faint normal-case tracking-normal">
            Building things for mobile.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              data-cursor="Open"
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
