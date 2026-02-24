import styles from './Testimonials.module.css'
import Image from 'next/image'

interface Review {
  author: string
  initial: string
  text: string
  rating?: number
  date: string
  profilePhoto?: string
}

interface GoogleReviewsData {
  rating: number
  totalReviews: number
  reviews: Review[]
}

async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ms-osteopathe.vercel.app'
    const res = await fetch(`${baseUrl}/api/google-reviews`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) throw new Error()
    return res.json()
  } catch {
    return null
  }
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className={styles.cardStars}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? styles.starFull : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  )
}

const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? 'ChIJ8R2vaYSlthIRVKzkWECSW0g'

export default async function Testimonials() {
  const data = await getGoogleReviews()

  const reviews: Review[] = data?.reviews ?? []
  const rating: number = data?.rating ?? 5.0
  const totalReviews: number = data?.totalReviews ?? 0

  return (
    <section className={styles.section} id="avis">

      {/* ── Header ── */}
      <div className={styles.header}>
        <div>
          <p className="section-tag">Témoignages</p>
          <h2 className="section-title">
            Ce que disent<br />
            <em>mes patients</em>
          </h2>
        </div>

        <a
          href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ratingBadge}
        >
          <div className={styles.ratingLeft}>
            <span className={styles.ratingNum}>{rating.toFixed(1)}</span>
            <span className={styles.ratingStars}>★★★★★</span>
          </div>
          <div className={styles.ratingRight}>
            <p className={styles.ratingCount}>{totalReviews} avis vérifiés</p>
            <div className={styles.googleBadge}>
              <span className={styles.googleDot} />
              Google Reviews
            </div>
          </div>
        </a>
      </div>

      {/* ── Cards ── */}
      {reviews.length > 0 ? (
        <div className={styles.grid}>
          {reviews.map((t, i) => (
            <div key={`${t.author}-${i}`} className={styles.card}>

              <span className={styles.cardIndex}>0{i + 1}</span>

              <StarRating rating={t.rating} />

              <p className={styles.text}>{t.text}</p>

              <div className={styles.divider} />

              <div className={styles.author}>
                <div className={styles.avatarWrapper}>
                  {t.profilePhoto ? (
                    <Image
                      src={t.profilePhoto}
                      alt={t.author}
                      width={40}
                      height={40}
                      className={styles.avatar}
                    />
                  ) : (
                    <div className={styles.avatarFallback}>{t.initial}</div>
                  )}
                  <div className={styles.avatarRing} />
                </div>

                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{t.author}</p>
                  <p className={styles.authorDate}>{t.date}</p>
                </div>

                {/* Icône Google discrète */}
                <svg
                  className={styles.googleIcon}
                  width="16" height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '60px 0' }}>
          Chargement des avis…
        </p>
      )}

      {/* ── CTA laisser un avis ── */}
      {reviews.length > 0 && (
        <div className={styles.cta}>
          <a
            href={`https://search.google.com/local/writereview?placeid=${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            Laisser un avis Google
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>
      )}

    </section>
  )
}