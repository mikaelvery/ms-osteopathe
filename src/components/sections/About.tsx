import { QUALITIES } from '@/lib/constants'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      {/* Left — quote */}
      <div className={styles.visual}>
        <blockquote className={styles.quote}>
          Votre santé est entre vos mains — prenons le temps de la découvrir ensemble.
        </blockquote>
      </div>

      {/* Right — content */}
      <div className={styles.content}>
        <p className="section-tag">À propos</p>
        <h2 className="section-title">
          Mathieu <em>Spaeth</em>
        </h2>
        <p className={styles.text}>
          Ostéopathe D.O. installé à Castelnau-le-Lez, je reçois mes patients
          au sein du cabinet de la salle de sport Fitfamily, 500 avenue de
          l&apos;Europe, du lundi au samedi sur rendez-vous. Je propose également
          des consultations à domicile pour les personnes à mobilité réduite.
        </p>

        <ul className={styles.qualities}>
          {QUALITIES.map((q) => (
            <li key={q.name} className={styles.quality}>
              <span className={styles.dot} />
              <div>
                <p className={styles.qualityName}>{q.name}</p>
                <p className={styles.qualityDesc}>{q.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
