import Image from 'next/image'
import { SERVICES } from '@/lib/constants'
import styles from './Services.module.css'

// Images Unsplash pertinentes ostéopathie — stables via /photo/ID/
const CARD_IMAGES = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop', // structurelle - dos
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&auto=format&fit=crop', // viscérale - abdomen
  'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&auto=format&fit=crop', // crânienne - tête
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div>
          <p className="section-tag">Approche ostéopathique</p>
          <h2 className="section-title">
            Une approche<br />
            <em>globale</em> du corps
          </h2>
        </div>
        <p className={styles.desc}>
          Ostéopathe passionné, je m'emploie à développer une ostéopathie complète
          et efficace, s'adaptant à chaque profil et à chaque problématique.
          J'associe techniques structurelles, tissulaires, viscérales et crâniennes —
          la diversité de mes patients fait ma force.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <div key={s.num} className={styles.card}>

            {/* Image header */}
            <div className={styles.cardImg}>
              <Image
                src={CARD_IMAGES[i % CARD_IMAGES.length]}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={85}
                className={styles.cardImgInner}
              />
              {/* Overlay dégradé bas */}
              <div className={styles.cardImgOverlay} />
              {/* Numéro flottant */}
              <span className={styles.cardNum}>{s.num}</span>
            </div>

            {/* Contenu */}
            <div className={styles.cardBody}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardCta}>En savoir plus →</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}