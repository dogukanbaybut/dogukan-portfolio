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
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-medium text-ink">Doğukan Baybut</p>
          <p className="mt-1 text-sm text-ink-faint">Building things for the web.</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={social.label}
              className="rounded-full border border-border p-2 text-ink-muted transition-colors hover:border-accent/60 hover:text-ink"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-ink-faint">© {year} Doğukan Baybut</p>
      </Container>
    </footer>
  )
}
