import Link from 'next/link'
import { SITE, STATS } from '@/lib/constants'
import AnatomySvg from '@/components/ui/AnatomySvg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Left column */}
      <div className={styles.left}>
        <p className={`${styles.tag} fade-up`}>
          Cabinet &amp; Domicile · Castelnau-le-Lez
        </p>

        <h1 className={`${styles.title} fade-up delay-1`}>
          Soigner,<br />
          <em>écouter,</em><br />
          libérer.
        </h1>

        <p className={`${styles.subtitle} fade-up delay-2`}>
          Ostéopathie structurelle, viscérale &amp; crânienne
        </p>

        <p className={`${styles.desc} fade-up delay-3`}>
          Ne laissez plus vos douleurs physiques envahir votre quotidien.
          Chaque consultation est une approche globale, précise et humaine —
          pour retrouver le mouvement naturel de votre corps.
        </p>

        <div className={`${styles.actions} fade-up delay-4`}>
          <a
            href={SITE.doctolib}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Prendre rendez-vous
            <ArrowIcon />
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost">
            <span className="circle">☏</span>
            {SITE.phone}
          </a>
        </div>

        {/* Stats */}
        <div className={`${styles.stats} fade-up delay-4`}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — illustration */}
      <div className={styles.right}>
        <div className={styles.imageWrap}>
          <AnatomySvg />
        </div>
        <div className={styles.verticalLine} />
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
