import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import Image from 'next/image'
import styles from './BlogPreview.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
export const revalidate = 3600

export default async function BlogPreview() {
  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, published_at, cover_image')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(3)

  if (!posts || posts.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className="section-tag">Blog</p>
          <h2 className="section-title">Conseils &amp; <em>Bien-être</em></h2>
        </div>
        <Link href="/blog" className={styles.allLink}>Tous les articles →</Link>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>

            {/* Image */}
            <div className={styles.cardImg}>
              {post.cover_image ? (
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={80}
                  className={styles.cardImgInner}
                />
              ) : (
                <div className={styles.cardImgPlaceholder} />
              )}
            </div>

            {/* Body */}
            <div className={styles.cardBody}>
              <span className={styles.date}>
                {new Date(post.published_at).toLocaleDateString('fr-FR', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </span>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              {post.excerpt && (
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
              )}
              <span className={styles.cardCta}>Lire l'article →</span>
            </div>

          </Link>
        ))}
      </div>
    </section>
  )
}