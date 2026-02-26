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
      <GalleryCarousel
        images={images ?? []}
        title="Un espace pensé pour votre confort"
        desc="Situé au sein de la salle Fitfamily à Castelnau-le-Lez, le cabinet offre un cadre calme et professionnel, conçu pour vous accueillir dans les meilleures conditions."
        count={images?.length ?? 0}
      />
    </section>
  )
}