import styles from './WhyMe.module.css'

const REASONS = [
  {
    num: '01',
    title: 'Rigoureux',
    desc: "L'ostéopathie est un métier exigeant. Je m'efforce d'être précis et rassurant à chaque consultation, en adaptant mon approche à votre profil et à votre sensibilité.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Prévenant',
    desc: "Il m'est primordial d'accorder à mes patients une attention qui dépasse le cadre de la consultation — pour créer une véritable relation de confiance sur le long terme.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Pédagogue',
    desc: "Je m'applique à rendre mes patients responsables vis-à-vis de leur santé et autonomes pour la préserver — car une bonne compréhension de son corps est la meilleure prévention.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
]

export default function WhyMe() {
  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <div className={styles.headerLine} />
        <p className={styles.headerTag}>Pourquoi me consulter</p>
        <div className={styles.headerLine} />
      </div>

      <h2 className={styles.title}>
        3 bonnes raisons<br />
        <em>de me contacter</em>
      </h2>

      <div className={styles.grid}>
        {REASONS.map((r) => (
          <div key={r.num} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardNum}>{r.num}</span>
              <div className={styles.cardIcon}>{r.icon}</div>
            </div>
            <h3 className={styles.cardTitle}>{r.title}</h3>
            <p className={styles.cardDesc}>{r.desc}</p>
            <div className={styles.cardBar} />
          </div>
        ))}
      </div>

    </section>
  )
}
