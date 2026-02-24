import styles from './Testimonials.module.css'
import TestimonialsCarousel from './TestimonialsCarousel'

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

const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? 'ChIJ8R2vaYSlthIRVKzkWECSW0g'

export default async function Testimonials() {
  const data = await getGoogleReviews()

  const reviews: Review[] = data?.reviews ?? []
  const rating: number    = data?.rating ?? 5.0
  const totalReviews: number = data?.totalReviews ?? 0

  return (
    <section className={styles.section} id="avis">

      {/* Header */}
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

      {/* Carousel client component */}
      {reviews.length > 0 ? (
        <TestimonialsCarousel
          reviews={reviews}
          rating={rating}
          totalReviews={totalReviews}
          placeId={PLACE_ID}
        />
      ) : (
        <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '60px 0' }}>
          Chargement des avis…
        </p>
      )}

    </section>
  )
}