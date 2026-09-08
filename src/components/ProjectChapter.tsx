import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './ui/BrandIcons'
import { TechBadge } from './ui/TechBadge'
import type { Project } from '../data/projects'

export function ProjectChapter({ project, order }: { project: Project; order: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96])
  const imageY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -24, reduceMotion ? 0 : 24])

  return (
    <div ref={ref} className="grid grid-cols-1 gap-10 border-t border-border py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
      <div className="lg:col-span-4">
        <span className="font-mono text-xs text-ink-faint">{order}</span>
        <h3 className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight text-ink sm:text-5xl">
          {project.name}
        </h3>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {project.category}
        </p>

        <p className="mt-6 text-sm leading-relaxed text-ink-muted sm:text-base">
          {project.description}
        </p>

        {project.highlights && (
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="View"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
            >
              <GithubIcon className="size-4" /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              <GithubIcon className="size-4" /> Code coming soon
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="Open"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowUpRight className="size-4" /> Live
            </a>
          )}
        </div>
      </div>

      <div className="lg:col-span-8">
        <div className="lg:sticky lg:top-28">
          <motion.div
            style={{ scale }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-border bg-bg-elevated bg-grid"
          >
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="font-display text-outline text-[18vw] font-medium leading-none tracking-tighter sm:text-[10rem]">
                {order}
              </span>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
