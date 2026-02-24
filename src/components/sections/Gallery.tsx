import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'
import styles from './Gallery.module.css'

// Client côté serveur (Server Component)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { global: { fetch: (url, opts) => fetch(url, { ...opts, cache: 'no-store' }) } }
)

export default async function Gallery() {
  // Fetch depuis Supabase à chaque requête
  const { data: images } = await supabase
    .from('gallery')
    .select('*')
    .order('order', { ascending: true })

  // Fallback si pas encore de photos uploadées
  if (!images || images.length === 0) {
    return (
      <section className={styles.section} id="galerie">
        <div className={styles.header}>
          <div>
            <p className="section-tag">Le cabinet</p>
            <h2 className="section-title">
              Un espace pensé<br />
              <em>pour votre confort</em>
            </h2>
          </div>
          <p className={styles.desc}>
            Situé au sein de la salle Fitfamily à Castelnau-le-Lez, le cabinet
            offre un cadre calme et professionnel, conçu pour vous accueillir
            dans les meilleures conditions.
          </p>
        </div>
        <p className={styles.empty}>Les photos du cabinet arrivent bientôt.</p>
      </section>
    )
  }

  return (
    <section className={styles.section} id="galerie">
      <div className={styles.header}>
        <div>
          <p className="section-tag">Le cabinet</p>
          <h2 className="section-title">
            Un espace pensé<br />
            <em>pour votre confort</em>
          </h2>
        </div>
        <p className={styles.desc}>
          Situé au sein de la salle Fitfamily à Castelnau-le-Lez, le cabinet
          offre un cadre calme et professionnel, conçu pour vous accueillir
          dans les meilleures conditions.
        </p>
      </div>

      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={img.id} className={`${styles.item} ${styles[`item${(i % 6) + 1}`]}`}>
            <Image
              src={img.url}
              alt={img.label || 'Photo du cabinet'}
              fill
              sizes={
                i === 0 || i === 4
                  ? '(max-width: 900px) 100vw, 50vw'   // grandes cellules
                  : '(max-width: 900px) 50vw, 25vw'    // petites cellules
              }
              quality={90}
              className={styles.img}
            />
            {img.label && (
              <div className={styles.overlay}>
                <span>{img.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}