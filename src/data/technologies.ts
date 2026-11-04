import type { ComponentType } from 'react'
import { Atom, Braces, Component, FileCode, FileCode2, Flame, Palette, Sparkles, Database, Boxes } from 'lucide-react'

export const technologyIcons: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'React Native': Component,
  'React.js': Atom,
  TypeScript: FileCode2,
  JavaScript: Braces,
  Firebase: Flame,
  PostgreSQL: Database,
  'ABP Framework': Boxes,
  HTML5: FileCode,
  CSS: Palette,
  Claude: Sparkles,
}
