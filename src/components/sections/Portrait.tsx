import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'
import { PRACTITIONER_DETAILS } from '@/lib/constants'
import styles from './Portrait.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function Portrait() {
  const { data: portraitImgs } = await supabase
    .from('gallery')
    .select('*')
    .eq('is_portrait', true)
    .order('order', { ascending: true })
    .limit(3)

  // thumbs = images Supabase seulement (pas la photo principale locale)
  const thumbs = portraitImgs ?? []

  return (
    <section className={styles.section} id="portrait">
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className="section-tag">Le praticien</p>
          <h2 className="section-title">Un visage<br /><em>derrière les mains</em></h2>
          <p className={styles.desc}>
            Diplômé d&apos;État en ostéopathie, Mathieu Spaeth exerce avec passion
            depuis plus de 10 ans. Son approche allie technicité et bienveillance —
            chaque patient est unique, chaque séance est construite sur mesure.
          </p>
          <dl className={styles.details}>
            {PRACTITIONER_DETAILS.map((d) => (
              <div key={d.label} className={styles.detailItem}>
                <dt className={styles.detailLabel}>{d.label}</dt>
                <dd className={styles.detailValue}>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.masonry}>
          {/* Photo principale — toujours locale */}
          <div className={styles.mainImg}>
            <Image
              src="/images/mathieu-spaeth.png"
              alt="Mathieu Spaeth"
              fill
              sizes="(max-width: 640px) 55vw, (max-width: 1024px) 40vw, 28vw"
              className={styles.img}
              priority
            />
            <div className={styles.overlay}><span>Mathieu Spaeth</span></div>
          </div>

          {/* Thumbs Supabase — max 2 affichées */}
          {thumbs.slice(0, 2).map((t) => (
            <div key={t.id} className={styles.thumb}>
              <Image
                src={t.url}
                alt={t.label || 'Soin'}
                fill
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 18vw"
                className={styles.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}