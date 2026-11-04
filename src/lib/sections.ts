import { useTranslation } from 'react-i18next'

/** Home page section anchors per language, so the URL reads `#iletisim` in Turkish and `#contact` in English. */
export const SECTIONS = {
  top: { tr: 'anasayfa', en: 'top' },
  about: { tr: 'hakkimda', en: 'about' },
  skills: { tr: 'yetenekler', en: 'skills' },
  projects: { tr: 'projeler', en: 'projects' },
  experience: { tr: 'deneyim', en: 'experience' },
  education: { tr: 'egitim', en: 'education' },
  focus: { tr: 'odak', en: 'focus' },
  contact: { tr: 'iletisim', en: 'contact' },
} as const

export type SectionKey = keyof typeof SECTIONS

/** Anchors used by earlier versions of the site, kept so old links still land on the right section. */
const LEGACY_IDS: Record<string, SectionKey> = { 'tech-stack': 'skills' }

export function sectionId(key: SectionKey, lang: string) {
  return SECTIONS[key][lang === 'en' ? 'en' : 'tr']
}

/** Finds the section an anchor points to, whichever language (or legacy name) it is in. */
export function sectionKeyFromId(id: string): SectionKey | undefined {
  const decoded = decodeURIComponent(id)
  if (LEGACY_IDS[decoded]) return LEGACY_IDS[decoded]
  return (Object.keys(SECTIONS) as SectionKey[]).find(
    (key) => SECTIONS[key].tr === decoded || SECTIONS[key].en === decoded,
  )
}

/**
 * Rewrites the current URL hash into `lang` (e.g. `#contact` → `#iletisim`) without scrolling.
 * Returns the resolved section id, or undefined when the hash isn't a known section.
 */
export function syncHashToLanguage(lang: string) {
  if (typeof window === 'undefined') return undefined
  const current = window.location.hash.slice(1)
  if (!current) return undefined
  const key = sectionKeyFromId(current)
  if (!key) return undefined
  const target = sectionId(key, lang)
  if (target !== current) {
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${window.location.search}#${target}`)
  }
  return target
}

/** The anchor id for a section in the active language. */
export function useSectionId(key: SectionKey) {
  const { i18n } = useTranslation()
  return sectionId(key, i18n.language)
}
