import { QUALITIES } from '@/lib/constants'
import styles from './About.module.css'

const EXPERIENCES = [
  {
    icon: '🎓',
    title: 'Diplômé en ostéopathie',
    date: 'Juillet 2017',
    desc: "Formé en 5 ans à l'Institut Supérieur d'Ostéopathie du Grand Montpellier. Ostéopathie structurelle, viscérale & crânienne, posturologie.",
  },
  {
    icon: '⊕',
    title: 'Fondateur d\'AROFRANCE',
    date: 'Janvier 2019',
    desc: "Président Directeur de l'Alliance Régionale des Ostéopathes de France — structure unique dédiée à l'accompagnement de carrière des ostéopathes et à la prévention santé en entreprise.",
  },
]

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
          Originaire de Montpellier, j&apos;exerce l&apos;ostéopathie avec passion depuis 2017.
          Diplômé de l&apos;Institut Supérieur d&apos;Ostéopathie du Grand Montpellier après
          5 années d&apos;études à temps plein, je continue de me former chaque année
          afin d&apos;enrichir mon bagage technique et affiner ma capacité de diagnostic.
        </p>

        {/* Expériences */}
        <div className={styles.experiences}>
          {EXPERIENCES.map((exp) => (
            <div key={exp.title} className={styles.expItem}>
              <div className={styles.expHeader}>
                <span className={styles.expIcon}>{exp.icon}</span>
                <div>
                  <p className={styles.expTitle}>{exp.title}</p>
                  <p className={styles.expDate}>{exp.date}</p>
                </div>
              </div>
              <p className={styles.expDesc}>{exp.desc}</p>
            </div>
          ))}
        </div>

        {/* Qualités */}
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