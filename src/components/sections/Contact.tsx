import { SITE, HOURS } from '@/lib/constants'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <p className="section-tag">Informations pratiques</p>
      <h2 className="section-title">
        Horaires &amp; <em>Contact</em>
      </h2>

      <div className={styles.grid}>
        {/* Hours */}
        <div>
          <h3 className={styles.blockTitle}>Horaires de consultation</h3>
          <ul className={styles.hoursList}>
            {HOURS.map((h) => (
              <li key={h.day} className={styles.hoursItem}>
                <span className={styles.day}>{h.day}</span>
                {h.hours ? (
                  <span>{h.hours}</span>
                ) : (
                  <span className={styles.closed}>Fermé</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Coordinates */}
        <div>
          <h3 className={styles.blockTitle}>Coordonnées</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>☏</span>
              <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>⊡</span>
              <span>
                {SITE.address.street}<br />
                {SITE.address.complement}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className={styles.blockTitle}>Prendre rendez-vous</h3>
          <p className={styles.ctaDesc}>
            Réservation en ligne 24h/24 via Doctolib, ou contactez directement le cabinet par téléphone.
          </p>
          <a
            href={SITE.doctolib}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Réserver sur Doctolib
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
