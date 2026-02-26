import { createClient } from '@supabase/supabase-js'
import styles from './Contact.module.css'
import { SITE, HOURS_FALLBACK } from '@/lib/constants'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface Hour {
  id: number
  day: string
  hours: string | null
  order: number
}

async function getHours(): Promise<Hour[]> {
  const { data } = await supabase
    .from('hours')
    .select('*')
    .order('order', { ascending: true })
  return data ?? HOURS_FALLBACK.map((h, i) => ({ id: i, ...h, order: i }))
}

export default async function Contact() {
  const hours = await getHours()

  return (
    <section className={styles.section} id="contact">
      <p className="section-tag">Informations pratiques</p>
      <h2 className="section-title">
        Horaires &amp; <em>Contact</em>
      </h2>

      <div className={styles.grid}>

        {/* Horaires */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Horaires de consultation</h3>
          <ul className={styles.hoursList}>
            {hours.map((h) => (
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

        {/* Coordonnées */}
        <div className={styles.block}>
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

          <h3 className={`${styles.blockTitle} ${styles.blockTitleSpaced}`}>Prendre rendez-vous</h3>
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

        {/* Google Maps */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Nous trouver</h3>
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.123456789!2d3.9200!3d43.6350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6b0a5e5b5e5b5%3A0x1234567890abcdef!2s500%20Avenue%20de%20l'Europe%2C%2034170%20Castelnau-le-Lez!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cabinet Mathieu Spaeth — 500 Avenue de l'Europe, Castelnau-le-Lez"
            />
          </div>
          <a
            href="https://maps.google.com/?q=500+Avenue+de+l'Europe,+Castelnau-le-Lez"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Ouvrir dans Google Maps →
          </a>
        </div>

      </div>
    </section>
  )
}