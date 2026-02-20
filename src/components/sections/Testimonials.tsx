import { TESTIMONIALS } from '@/lib/constants'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.section} id="avis">
      <div className={styles.header}>
        <div>
          <p className="section-tag">Témoignages</p>
          <h2 className="section-title">
            Ce que disent<br />
            <em>mes patients</em>
          </h2>
        </div>

        <div className={styles.ratingBadge}>
          <span className={styles.ratingNum}>5.0</span>
          <div>
            <p className={styles.stars}>★★★★★</p>
            <p className={styles.ratingCount}>276 avis Google vérifiés</p>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <div key={t.author} className={styles.card}>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initial}</div>
              <div>
                <p className={styles.authorName}>{t.author}</p>
                <p className={styles.authorDate}>{t.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
