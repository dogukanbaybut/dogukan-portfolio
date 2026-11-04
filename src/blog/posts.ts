import type { ComponentType } from 'react'
import ReactNativeNedir from './posts/ReactNativeNedir'

export interface BlogPost {
  slug: string
  title: string
  description: string
  /** ISO date, e.g. 2026-11-04 */
  date: string
  readingMinutes: number
  tags: string[]
  Content: ComponentType
}

/**
 * Blog posts, newest first.
 *
 * Adding a post:
 * 1. Write the content component in `src/blog/posts/`.
 * 2. Register it here.
 * 3. Copy `blog/react-native-nedir/index.html` to `blog/<slug>/index.html` and update its SEO tags.
 * 4. Add the HTML file to `build.rollupOptions.input` in `vite.config.ts`.
 * 5. Add the URL to `public/sitemap.xml`.
 */
export const posts: BlogPost[] = [
  {
    slug: 'react-native-nedir',
    title: 'React Native Nedir? Mobil Uygulama Geliştirme İçin Kapsamlı Rehber (2026)',
    description:
      'React Native nedir, nasıl çalışır, avantajları ve dezavantajları neler? React Native mi Flutter mı, Expo ile ilk uygulama ve React Native öğrenme yol haritası bu rehberde.',
    date: '2026-11-04',
    readingMinutes: 9,
    tags: ['React Native', 'Mobil Uygulama', 'JavaScript', 'Expo'],
    Content: ReactNativeNedir,
  },
]

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}
