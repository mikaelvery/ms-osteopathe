import { createClient } from '@supabase/supabase-js'
import styles from './Gallery.module.css'
import { GalleryCarousel } from './GalleryCarousel'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { global: { fetch: (url, opts) => fetch(url, { ...opts, cache: 'no-store' }) } }
)

export default async function Gallery() {
  const { data: images } = await supabase
    .from('gallery')
    .select('*')
    .order('order', { ascending: true })

  return (
    <section className={styles.section} id="galerie">
      <div className={styles.layout}>

        {/* Left — sticky header */}
        <div className={styles.stickyHeader}>
          <p className="section-tag">Le cabinet</p>
          <h2 className="section-title">
            Un espace pensé<br />
            <em>pour votre confort</em>
          </h2>
          <p className={styles.desc}>
            Situé au sein de la salle Fitfamily à Castelnau-le-Lez, le cabinet
            offre un cadre calme et professionnel, conçu pour vous accueillir
            dans les meilleures conditions.
          </p>
          <div className={styles.headerDivider} />
          <p className={styles.headerCount}>
            {images?.length ?? 0} photo{(images?.length ?? 0) > 1 ? 's' : ''}
          </p>
        </div>

        {/* Right — carousel */}
        <div className={styles.carouselArea}>
          {!images || images.length === 0 ? (
            <p className={styles.empty}>Les photos du cabinet arrivent bientôt.</p>
          ) : (
            <GalleryCarousel images={images} />
          )}
        </div>

      </div>
    </section>
  )
}