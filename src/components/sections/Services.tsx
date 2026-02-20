import { SERVICES } from '@/lib/constants'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div>
          <p className="section-tag">Disciplines</p>
          <h2 className="section-title">
            Une approche<br />
            <em>globale</em> du corps
          </h2>
        </div>
        <p className={styles.desc}>
          L&apos;ostéopathie traite l&apos;ensemble du système musculo-squelettique,
          viscéral et crânien. Chaque séance est adaptée à votre problématique,
          pour une prise en charge complète et personnalisée.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s) => (
          <div key={s.num} className={styles.card}>
            <span className={styles.cardNum}>{s.num}</span>
            <div className={styles.cardIcon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
