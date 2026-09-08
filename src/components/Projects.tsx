import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { MotionSection } from './ui/MotionSection'
import { TechBadge } from './ui/TechBadge'
import { GithubIcon } from './ui/BrandIcons'
import { fadeUp } from './ui/motionVariants'
import { projects } from '../data/projects'
import { cn } from '../lib/utils'

export function Projects() {
  return (
    <MotionSection id="projects">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="A selection of products and experiments — real problems, real code."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={fadeUp}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong',
                project.size === 'large' && 'lg:col-span-2',
              )}
            >
              <div className="relative flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
                <div
                  className={cn(
                    'relative flex aspect-video w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-elevated bg-grid sm:w-64',
                  )}
                >
                  <span className="font-mono text-3xl font-semibold text-ink-faint/40">
                    {project.name
                      .split(/\s+/)
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 3)}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                        {project.category}
                      </p>
                      <h3 className="mt-1.5 flex items-center gap-2 text-xl font-semibold text-ink">
                        {project.name}
                        <ArrowUpRight
                          className="size-4 text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <ul className="mt-4 space-y-1.5">
                      {project.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-ink-muted"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        <GithubIcon className="size-4" /> Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-ink-faint">
                        <GithubIcon className="size-4" /> Code coming soon
                      </span>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        <ArrowUpRight className="size-4" /> Live
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              {project.isPlaceholder && (
                <div className="border-t border-border bg-bg-elevated px-8 py-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                    Placeholder — update in data/projects.ts
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
