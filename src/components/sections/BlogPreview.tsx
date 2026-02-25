import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import styles from './BlogPreview.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const revalidate = 3600

export default async function BlogPreview() {
  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, published_at')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(3)

  // Si aucun article publié, on n'affiche pas la section
  if (!posts || posts.length === 0) return null

  return (
    <section className={styles.section}>
      <p className="section-tag">Blog</p>
      <h2 className="section-title">
        Conseils &amp; <em>Bien-être</em>
      </h2>

      <div className={styles.grid}>
        {posts.map(post => (
          <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.date}>
                {new Date(post.published_at).toLocaleDateString('fr-FR', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            {post.excerpt && (
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
            )}
            <span className={styles.cardCta}>Lire l'article →</span>
          </Link>
        ))}
      </div>

      <div className={styles.footer}>
        <Link href="/blog" className={styles.allLink}>
          Voir tous les articles →
        </Link>
      </div>
    </section>
  )
}
