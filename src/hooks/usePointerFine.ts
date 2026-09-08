import { useEffect, useState } from 'react'

const QUERY = '(hover: hover) and (pointer: fine)'

/** True only for devices with a precise pointer (mouse/trackpad), not touch. */
export function usePointerFine(): boolean {
  const [isFine, setIsFine] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const query = window.matchMedia(QUERY)
    const listener = (e: MediaQueryListEvent) => setIsFine(e.matches)
    query.addEventListener('change', listener)
    return () => query.removeEventListener('change', listener)
  }, [])

  return isFine
}
