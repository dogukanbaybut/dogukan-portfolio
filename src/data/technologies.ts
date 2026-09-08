import type { ComponentType } from 'react'
import {
  AppWindow,
  Atom,
  Braces,
  Component,
  FileCode,
  FileCode2,
  Flame,
  Palette,
} from 'lucide-react'

export interface Technology {
  name: string
  description: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
}

export const technologies: Technology[] = [
  { name: 'React Native', description: 'Cross-platform mobile apps', icon: Component },
  { name: 'Flutter', description: 'Native mobile UI toolkit', icon: AppWindow },
  { name: 'React.js', description: 'Component-driven UIs', icon: Atom },
  { name: 'TypeScript', description: 'Typed, reliable code', icon: FileCode2 },
  { name: 'JavaScript', description: 'The web, natively', icon: Braces },
  { name: 'Firebase', description: 'Realtime backend & auth', icon: Flame },
  { name: 'HTML5', description: 'Semantic structure', icon: FileCode },
  { name: 'CSS', description: 'Styling & layout', icon: Palette },
]
