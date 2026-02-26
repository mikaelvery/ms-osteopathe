import Image from 'next/image'
import styles from './WhyMe.module.css'
import { REASONS } from '@/lib/constants'

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