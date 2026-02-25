import styles from './dashboard.module.css'

const CARDS = [
  {
    icon: '◫',
    title: 'Galerie photos',
    desc: 'Ajoutez, supprimez et réorganisez les photos de votre cabinet.',
    href: '/qs-osteo-backoffice/gallery',
    cta: 'Gérer la galerie',
  },
  {
    icon: '◷',
    title: 'Horaires',
    desc: 'Modifiez vos horaires d\'ouverture pour chaque jour de la semaine.',
    href: '/qs-osteo-backoffice/hours',
    cta: 'Modifier les horaires',
  },
  {
    icon: '⚑',
    title: 'Bandeau d\'annonce',
    desc: 'Affichez un message temporaire sur le site — congés, fermeture exceptionnelle, nouveau créneau.',
    href: '/qs-osteo-backoffice/banner',
    cta: 'Gérer le bandeau',
  },
  {
    icon: '✎',
    title: 'Blog',
    desc: 'Publiez des articles pour améliorer votre référencement Google local.',
    href: '/qs-osteo-backoffice/blog',
    cta: 'Gérer les articles',
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
