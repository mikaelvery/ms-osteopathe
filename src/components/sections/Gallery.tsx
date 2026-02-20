import Image from 'next/image'
import { GALLERY_IMAGES } from '@/lib/constants'
import styles from './Gallery.module.css'

export default function Gallery() {
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
        {GALLERY_IMAGES.map((img, i) => (
          <div key={img.src} className={`${styles.item} ${styles[`item${i + 1}`]}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              className={styles.img}
            />
            <div className={styles.overlay}>
              <span>{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
