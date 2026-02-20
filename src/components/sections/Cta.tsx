import { SITE } from '@/lib/constants'
import styles from './Cta.module.css'

export default function Cta() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <h2 className={styles.title}>
        Prêt à <em>retrouver</em> votre mobilité&nbsp;?
      </h2>
      <p className={styles.sub}>Consultations sur rendez-vous, du lundi au samedi</p>
      <a
        href={SITE.doctolib}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Prendre rendez-vous en ligne
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </section>
  )
}
