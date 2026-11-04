import { Fragment } from 'react'

/**
 * English terms that appear inside otherwise-Turkish text.
 *
 * With `<html lang="tr">`, CSS `text-transform: uppercase` follows Turkish rules and turns
 * "i" into "İ" (e.g. "Firebase" → "FİREBASE"). Wrapping these terms in `lang="en"` makes them
 * uppercase as "FIREBASE", while Turkish words around them still get "İ" ("MOBİL").
 */
const EN_TERMS = [
  'ABP Framework',
  'Claude Code',
  'Full Stack',
  'React Native',
  'React.js',
  'React',
  'Native',
  'TypeScript',
  'JavaScript',
  'Firebase',
  'PostgreSQL',
  'Flutter',
  'Claude',
  'Expo',
  'GitHub',
  'LinkedIn',
  'Frontend',
  'Backend',
  'Developer',
  'Mobile',
  'Web',
  'API',
  'UX',
  'UI',
  'OCR',
  'HTML5',
  'CSS',
]

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Longest terms first so "React Native" wins over "React"; letters on either side mean it's part of another word.
const pattern = new RegExp(
  `(?<![\\p{L}])(${[...EN_TERMS].sort((a, b) => b.length - a.length).map(escape).join('|')})(?![\\p{L}])`,
  'gu',
)

/** Renders `text`, marking known English terms with `lang="en"` so they uppercase correctly. */
export function EnTerms({ text }: { text: string }) {
  const parts = text.split(pattern)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} lang="en">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
