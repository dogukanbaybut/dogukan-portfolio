import { ReactLenis } from 'lenis/react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { CustomCursor } from '../components/ui/CustomCursor'
import { ScrollProgress } from '../components/ui/ScrollProgress'
import { Container } from '../components/ui/Container'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { posts, formatDate, type BlogPost } from './posts'

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readingMinutes} dk okuma</span>
    </div>
  )
}

function BlogIndex() {
  return (
    <Container className="pt-40 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Blog</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl">
        Mobil ve web geliştirme üzerine yazılar
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
        React, React Native ve full stack geliştirme hakkında öğrendiklerimi ve deneyimlerimi paylaşıyorum.
      </p>

      <div className="mt-16 border-t border-border">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}/`}
            data-cursor="Oku"
            className="group grid grid-cols-1 gap-4 border-b border-border py-10 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <div>
              <PostMeta post={post} />
              <h2 className="mt-4 font-display text-2xl font-medium leading-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
                {post.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">{post.description}</p>
            </div>
            <ArrowUpRight className="size-6 text-ink-faint transition-colors group-hover:text-accent" />
          </a>
        ))}
      </div>
    </Container>
  )
}

function BlogPostPage({ post }: { post: BlogPost }) {
  const { Content } = post
  return (
    <Container className="pt-36 pb-24">
      <article className="mx-auto max-w-3xl">
        <a
          href="/blog/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-4" /> Tüm yazılar
        </a>

        <header className="mt-10 border-b border-border pb-10">
          <PostMeta post={post} />
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs text-ink-faint">
            Yazar: <a href="/" className="text-ink hover:text-accent">Doğukan Baybut</a> — Full Stack Developer
          </p>
        </header>

        <div className="prose-blog mt-10">
          <Content />
        </div>
      </article>
    </Container>
  )
}

export function BlogApp({ slug }: { slug?: string }) {
  const post = slug ? posts.find((p) => p.slug === slug) : undefined

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, anchors: true }}>
      <div className="relative min-h-screen bg-bg bg-noise text-ink">
        <ScrollProgress />
        <CustomCursor />
        <Navbar homeHref="/" />
        <main>{post ? <BlogPostPage post={post} /> : <BlogIndex />}</main>
        <Footer />
      </div>
    </ReactLenis>
  )
}
