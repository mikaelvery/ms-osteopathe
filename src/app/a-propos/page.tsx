// Fichier à placer dans : src/app/a-propos/page.tsx
// Créer le dossier src/app/a-propos/ s'il n'existe pas

import type { Metadata } from 'next'
import Link from 'next/link'
import { QUALITIES } from '@/lib/constants'
import styles from './a-propos.module.css'

export const metadata: Metadata = {
  title: 'À propos — Mathieu Spaeth Ostéopathe D.O.',
  description: "Découvrez le parcours de Mathieu Spaeth, ostéopathe D.O. à Castelnau-le-Lez depuis 2017.",
}

const EXPERIENCES = [
  {
    icon: '🎓',
    title: 'Diplômé en ostéopathie',
    date: 'Juillet 2017',
    desc: "Formé en 5 ans à l'Institut Supérieur d'Ostéopathie du Grand Montpellier. Ostéopathie structurelle, viscérale & crânienne, posturologie.",
  },
  {
    icon: '⊕',
    title: "Fondateur d'AROFRANCE",
    date: 'Janvier 2019',
    desc: "Président Directeur de l'Alliance Régionale des Ostéopathes de France — structure unique dédiée à l'accompagnement de carrière des ostéopathes et à la prévention santé en entreprise.",
  },
]

export default function AProposPage() {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/" className={styles.back}>← Retour au site</Link>
          <p className={styles.tag}>À propos</p>
          <h1 className={styles.title}>Mathieu <em>Spaeth</em></h1>
          <blockquote className={styles.quote}>
            Votre santé est entre vos mains — prenons le temps de la découvrir ensemble.
          </blockquote>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>

          <div className={styles.intro}>
            <p className={styles.lead}>
              Ostéopathe passionné, j'exerce depuis 2017 à Castelnau-le-Lez. Diplômé de
              l'Institut Supérieur d'Ostéopathie du Grand Montpellier après 5 années
              d'études à temps plein, je continue de me former chaque année.
            </p>
            <p className={styles.body}>
              Je m'emploie à développer une ostéopathie complète et efficace, s'adaptant
              à chaque profil et à chaque problématique, prenant en compte vos sensibilités.
              Je pratique ainsi une ostéopathie multiple et variée, associant techniques
              structurelles, tissulaires, viscérales et crâniennes...
            </p>
            <p className={styles.body}>
              N'hésitez pas à me contacter si vous souhaitez avoir de plus amples
              informations ou discuter de votre problématique.
            </p>
          </div>

          <div className={styles.experiences}>
            <h2 className={styles.sectionTitle}>Parcours</h2>
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

          <div className={styles.qualities}>
            <h2 className={styles.sectionTitle}>Ma façon de travailler</h2>
            <ul className={styles.qualityList}>
              {QUALITIES.map((q) => (
                <li key={q.name} className={styles.quality}>
                  <span className={styles.qualityDot} />
                  <div>
                    <p className={styles.qualityName}>{q.name}</p>
                    <p className={styles.qualityDesc}>{q.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.cta}>
            <a
              href="https://www.doctolib.fr/osteopathe/le-cres/mathieu-spaeth"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Prendre rendez-vous →
            </a>
          </div>

        </div>
      </section>
    </main>
  )
}