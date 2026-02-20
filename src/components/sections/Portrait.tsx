import Image from 'next/image'
import { PRACTITIONER_DETAILS, PORTRAIT_IMAGES } from '@/lib/constants'
import styles from './Portrait.module.css'

export default function Portrait() {
  const mainImg  = PORTRAIT_IMAGES.find((i) => i.isMain)!
  const thumbs   = PORTRAIT_IMAGES.filter((i) => !i.isMain)

  return (
    <section className={styles.section} id="portrait">
      <div className={styles.inner}>
        {/* Text */}
        <div className={styles.text}>
          <p className="section-tag">Le praticien</p>
          <h2 className="section-title">
            Un visage<br />
            <em>derrière les mains</em>
          </h2>
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

        {/* Masonry */}
        <div className={styles.masonry}>
          {/* Main image */}
          <div className={styles.mainImg}>
            <Image
              src={mainImg.src}
              alt={mainImg.alt}
              fill
              sizes="(max-width: 900px) 50vw, 30vw"
              className={styles.img}
            />
            <div className={styles.overlay}>
              <span>{mainImg.label}</span>
            </div>
          </div>

          {/* Thumbnails */}
          {thumbs.map((t) => (
            <div key={t.src} className={styles.thumb}>
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(max-width: 900px) 50vw, 20vw"
                className={styles.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
