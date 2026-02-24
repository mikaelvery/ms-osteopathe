import styles from './dashboard.module.css'

const CARDS = [
  {
    icon: '◫',
    title: 'Galerie photos',
    desc: 'Ajoutez, supprimez et réorganisez les photos de votre cabinet.',
    href: '/admin/gallery',
    cta: 'Gérer la galerie',
  },
  {
    icon: '◷',
    title: 'Horaires',
    desc: 'Modifiez vos horaires d\'ouverture pour chaque jour de la semaine.',
    href: '/admin/hours',
    cta: 'Modifier les horaires',
  },
  {
    icon: '◈',
    title: 'Témoignages',
    desc: 'Ajoutez de nouveaux avis patients et masquez ceux que vous ne souhaitez pas afficher.',
    href: '/admin/testimonials',
    cta: 'Gérer les témoignages',
  },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Bonjour, <em>Mathieu</em>
        </h1>
        <p className={styles.subtitle}>
          Que souhaitez-vous modifier aujourd'hui ?
        </p>
      </div>

      <div className={styles.grid}>
        {CARDS.map(card => (
          <a key={card.href} href={card.href} className={styles.card}>
            <span className={styles.cardIcon}>{card.icon}</span>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDesc}>{card.desc}</p>
            <span className={styles.cardCta}>{card.cta} →</span>
          </a>
        ))}
      </div>

      <div className={styles.tip}>
        <span className={styles.tipIcon}>ℹ</span>
        <p>Les modifications sont appliquées <strong>immédiatement</strong> sur le site public.</p>
      </div>
    </div>
  )
}
