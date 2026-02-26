// src/app/blog/page.tsx
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog — Mathieu Spaeth Ostéopathe D.O.',
  description: 'Conseils en ostéopathie, bien-être et santé par Mathieu Spaeth, ostéopathe D.O. à Castelnau-le-Lez.',
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { global: { fetch: (url, opts) => fetch(url, { ...opts, cache: 'no-store' }) } }
)
export const revalidate = 60

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, published_at, cover_image')
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>← Retour au site</Link>

        <div className={styles.header}>
          <p className="section-tag">Blog</p>
          <h1 className={styles.title}>Conseils &amp; <em>Bien-être</em></h1>
          <p className={styles.subtitle}>
            Articles sur l'ostéopathie, la posture et la santé au quotidien.
          </p>
        </div>

        {!posts || posts.length === 0 ? (
          <p className={styles.empty}>Aucun article publié pour l'instant.</p>
        ) : (
          <div className={styles.grid}>
            {posts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardImg}>
                  {post.cover_image ? (
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                      quality={80}
                      className={styles.cardImgInner}
                    />
                  ) : (
                    <div className={styles.cardImgPlaceholder} />
                  )}
                </div>
                <div className={styles.cardDate}>
                  {new Date(post.published_at).toLocaleDateString('fr-FR', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                {post.excerpt && <p className={styles.cardExcerpt}>{post.excerpt}</p>}
                <span className={styles.cardCta}>Lire l'article →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}