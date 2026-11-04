import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { GithubIcon } from './ui/BrandIcons'
import { TechBadge } from './ui/TechBadge'
import { useTilt } from '../hooks/useTilt'
import type { Project } from '../data/projects'
import { EnTerms } from './ui/EnTerms'

function ImageScroller({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const [dragging, setDragging] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(images.length - 1, i)))

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    startX.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
    setDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    setOffset(e.clientX - startX.current)
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    e.currentTarget.releasePointerCapture(e.pointerId)
    const dx = e.clientX - startX.current
    const width = trackRef.current?.clientWidth ?? 1
    const threshold = Math.min(60, width * 0.15)
    if (dx < -threshold) goTo(index + 1)
    else if (dx > threshold) goTo(index - 1)
    setOffset(0)
    setDragging(false)
  }

  return (
    <div className="group absolute inset-0 overflow-hidden">
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`flex h-full touch-pan-y select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab transition-transform duration-500 ease-out'}`}
        style={{ transform: `translateX(calc(${-index * 100}% + ${offset}px))` }}
      >
        {images.map((src, idx) => (
          <div key={src} className="flex h-full w-full flex-none items-center justify-center py-[5%]">
            <img
              src={src}
              alt={`${name} ${idx + 1}`}
              loading="lazy"
              draggable={false}
              className="pointer-events-none h-full w-auto rounded-2xl border border-border shadow-2xl"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => goTo(index - 1)}
        disabled={index === 0}
        className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-elevated/80 text-ink backdrop-blur transition-opacity hover:bg-bg-elevated disabled:opacity-0"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => goTo(index + 1)}
        disabled={index === images.length - 1}
        className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-elevated/80 text-ink backdrop-blur transition-opacity hover:bg-bg-elevated disabled:opacity-0"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((src, idx) => (
          <button
            key={src}
            type="button"
            aria-label={`${idx + 1}`}
            onClick={() => goTo(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === index ? 'w-6 bg-accent' : 'w-1.5 bg-ink-faint hover:bg-ink-muted'}`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProjectChapter({ project, order }: { project: Project; order: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96])
  const imageY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -24, reduceMotion ? 0 : 24])
  const tiltRef = useRef<HTMLDivElement>(null)
  const tilt = useTilt(tiltRef)
  const hasImages = Boolean(project.images?.length)

  return (
    <div ref={ref} className="grid grid-cols-1 gap-10 border-t border-border py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
      <div className="lg:col-span-4">
        <span className="font-mono text-xs text-ink-faint">{order}</span>
        <h3 className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight text-ink sm:text-5xl">
          {project.name}
        </h3>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
          <EnTerms text={project.category} />
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

        {(project.githubUrl || project.liveUrl) && (
        <div className="mt-8 flex items-center gap-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor={t('cursor.view')}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
            >
              <GithubIcon className="size-4" /> {t('projects.code')}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor={t('cursor.open')}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowUpRight className="size-4" /> {t('projects.live')}
            </a>
          )}
        </div>
        )}
      </div>

      <div className="lg:col-span-8">
        <div className="lg:sticky lg:top-28">
          <motion.div
            ref={tiltRef}
            onMouseMove={hasImages ? undefined : tilt.onMouseMove}
            onMouseLeave={hasImages ? undefined : tilt.onMouseLeave}
            style={{ scale, rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1000 }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-border bg-bg-elevated bg-grid [transform-style:preserve-3d]"
          >
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {project.images?.length ? (
                <ImageScroller images={project.images} name={project.name} />
              ) : (
                <span className="font-display text-outline text-[18vw] font-medium leading-none tracking-tighter sm:text-[10rem]">
                  {order}
                </span>
              )}
            </motion.div>
            {!hasImages && (
              <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent" />
            )}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ opacity: tilt.glareOpacity, background: tilt.glareBackground }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
