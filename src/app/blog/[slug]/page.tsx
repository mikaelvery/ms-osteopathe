import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import styles from '../blog.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const revalidate = 3600

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await supabase
    .from('posts')
    .select('title, excerpt')
    .eq('slug', params.slug)
    .single()

  if (!data) return {}
  return {
    title: `${data.title} — Mathieu Spaeth Ostéopathe`,
    description: data.excerpt,
  }
}

// Rendu basique du Markdown (gras, italique, titres, listes)
function renderMarkdown(text: string) {
  return text
    .split('\n')
    .map((line, i) => {
      if (line.startsWith('# '))  return `<h1 class="md-h1">${line.slice(2)}</h1>`
      if (line.startsWith('## ')) return `<h2 class="md-h2">${line.slice(3)}</h2>`
      if (line.startsWith('### ')) return `<h3 class="md-h3">${line.slice(4)}</h3>`
      if (line.startsWith('- '))  return `<li>${line.slice(2)}</li>`
      if (line === '')             return `<br />`
      return `<p>${line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
      }</p>`
    })
    .join('')
}

export default async function PostPage({ params }: Props) {
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  return (
    <main className={styles.main}>
      <div className={styles.articleContainer}>
        <Link href="/blog" className={styles.back}>← Retour aux articles</Link>

        <header className={styles.articleHeader}>
          <p className={styles.articleDate}>
            {new Date(post.published_at).toLocaleDateString('fr-FR', {
              day: 'numeric', month: 'long', year: 'numeric'
            })}
          </p>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          {post.excerpt && <p className={styles.articleExcerpt}>{post.excerpt}</p>}
        </header>

        <div
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        <div className={styles.articleFooter}>
          <p className={styles.articleAuthor}>
            Rédigé par <strong>Mathieu Spaeth</strong>, Ostéopathe D.O. à Castelnau-le-Lez
          </p>
          <Link href="https://www.doctolib.fr/osteopathe/le-cres/mathieu-spaeth" className={styles.articleCta} target="_blank">
            Prendre rendez-vous →
          </Link>
        </div>
      </div>
    </main>
  )
}
