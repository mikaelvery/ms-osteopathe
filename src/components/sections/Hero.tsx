import { SITE } from '@/lib/constants'
import { createClient } from '@supabase/supabase-js'
import styles from './Hero.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

async function getGoogleStats() {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID
    const apiKey  = process.env.GOOGLE_PLACES_API_KEY
    if (!placeId || !apiKey) throw new Error('Missing env vars')
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&language=fr&key=${apiKey}`
    const res  = await fetch(url, { next: { revalidate: 86400 } })
    const data = await res.json()
    if (!data.result) throw new Error('No result')
    return {
      total:  data.result.user_ratings_total ?? null,
      rating: data.result.rating ?? null,
    }
  } catch {
    return { total: null, rating: null }
  }
}

async function getHeroPhoto(): Promise<string | null> {
  try {
    // On cherche la 1ère photo portrait depuis Supabase
    const { data } = await supabase
      .from('gallery')
      .select('url')
      .eq('is_portrait', true)
      .order('order', { ascending: true })
      .limit(1)
      .single()
    return data?.url ?? null
  } catch {
    return null
  }
}

export default async function Hero() {
  const [{ total, rating }, heroPhotoUrl] = await Promise.all([
    getGoogleStats(),
    getHeroPhoto(),
  ])

  const yearsOfExperience = new Date().getFullYear() - 2017

  const stats = [
    { num: total  ? `${total}+`          : '276+', label: 'Avis Google'        },
    { num: rating ? rating.toFixed(1)    : '5.0',  label: 'Note moyenne'       },
    { num: `${yearsOfExperience}+`,                label: "Années d'expérience" },
  ]

  // Photo hero : Supabase en priorité, sinon image locale
  const photoSrc = heroPhotoUrl ?? '/images/mathieu-spaeth.png'

  return (
    <section className={styles.hero}>

      {/* ── Colonne gauche ── */}
      <div className={styles.left}>
        <div className={styles.bgGlow} aria-hidden />

        <div className={styles.waves} aria-hidden>
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,60 C240,100 480,20 720,55 C960,90 1200,30 1440,60 L1440,100 L0,100 Z" fill="rgba(255,255,255,0.04)" />
            <path d="M0,75 C180,40 420,90 660,68 C900,44 1140,84 1440,72 L1440,100 L0,100 Z" fill="rgba(255,255,255,0.03)" />
          </svg>
        </div>

        <div className={`${styles.tag} fade-up`}>
          <span className={styles.tagDot} />
          Cabinet &amp; Domicile · Castelnau-le-Lez
        </div>

        <h1 className={`${styles.title} fade-up delay-1`}>
          Soigner,<br />
          <em>écouter,</em><br />
          libérer.
        </h1>

        <p className={`${styles.subtitle} fade-up delay-2`}>
          Ostéopathie structurelle, viscérale &amp; crânienne
        </p>

        <p className={`${styles.desc} fade-up delay-3`}>
          Ne laissez plus vos douleurs physiques envahir votre quotidien.
          Chaque consultation est une approche globale, précise et humaine —
          pour retrouver le mouvement naturel de votre corps.
        </p>

        <div className={`${styles.actions} fade-up delay-4`}>
          <a
            href={SITE.doctolib}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Prendre rendez-vous
            <ArrowIcon />
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className={styles.btnGhost}>
            <span>☏</span>
            {SITE.phone}
          </a>
        </div>

        <div className={`${styles.stats} fade-up delay-4`}>
          {stats.map((s, i) => (
            <>
              {i > 0 && <div key={`div-${i}`} className={styles.statDivider} />}
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </>
          ))}
        </div>

        <a
          href={`https://search.google.com/local/reviews?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? 'ChIJ8R2vaYSlthIRVKzkWECSW0g'}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.googleBadge} fade-up delay-4`}
        >
          <GoogleIcon />
          <span className={styles.googleStars}>★★★★★</span>
          <span className={styles.googleText}>Voir les avis Google</span>
        </a>
      </div>

      {/* ── Colonne droite — photo ── */}
      <div className={styles.right}>
        <span className={styles.verticalLine} aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt="Mathieu Spaeth, ostéopathe D.O."
          loading="eager"
        />
      </div>

    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
