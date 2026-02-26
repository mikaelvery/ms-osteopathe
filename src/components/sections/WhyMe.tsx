import Image from 'next/image'
import styles from './WhyMe.module.css'

const REASONS = [
  {
    num: '01',
    title: 'Rigoureux',
    desc: "L'ostéopathie est un métier exigeant. Je m'efforce d'être précis et rassurant à chaque consultation, en adaptant mon approche à votre profil et à votre sensibilité.",
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop&crop=center',
    alt: 'Mains ostéopathe précises',
  },
  {
    num: '02',
    title: 'Prévenant',
    desc: "Il m'est primordial d'accorder à mes patients une attention qui dépasse le cadre de la consultation — pour créer une véritable relation de confiance sur le long terme.",
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&h=200&fit=crop&crop=center',
    alt: 'Relation de confiance patient',
  },
  {
    num: '03',
    title: 'Pédagogue',
    desc: "Je m'applique à rendre mes patients responsables vis-à-vis de leur santé et autonomes pour la préserver — car une bonne compréhension de son corps est la meilleure prévention.",
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&crop=center',
    alt: 'Explication ostéopathie pédagogie',
  },
]

export default function WhyMe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <p className="section-tag">Pourquoi me consulter</p>
          <h2 className="section-title">
            3 bonnes raisons<br />
            <em>de me contacter</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {REASONS.map((r) => (
            <div key={r.num} className={styles.item}>
              <div className={styles.itemLine} />
              <div className={styles.itemInner}>

                {/* Photo ronde */}
                <div className={styles.imgWrap}>
                  <Image
                    src={r.img}
                    alt={r.alt}
                    fill
                    sizes="96px"
                    className={styles.img}
                  />
                </div>

                <span className={styles.num}>{r.num}</span>
                <div className={styles.content}>
                  <h3 className={styles.itemTitle}>{r.title}</h3>
                  <p className={styles.itemDesc}>{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}