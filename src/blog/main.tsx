import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../i18n/config'
import { BlogApp } from './BlogApp'

// Each blog HTML page sets `data-slug` on #root; the blog index leaves it empty.
const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <BlogApp slug={root.dataset.slug || undefined} />
  </StrictMode>,
)
