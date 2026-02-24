'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styles from './TestimonialsCarousel.module.css'

interface Review {
  author: string
  initial: string
  text: string
  rating?: number
  date: string
  profilePhoto?: string
}

interface Props {
  reviews: Review[]
  rating: number
  totalReviews: number
  placeId: string
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className={styles.cardStars}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? styles.starFull : styles.starEmpty}>★</span>
      ))}
    </div>
  )
}

export default function TestimonialsCarousel({ reviews, rating, totalReviews, placeId }: Props) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const total = reviews.length

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % total)
  }, [total])

  const prev = () => {
    setCurrent(c => (c - 1 + total) % total)
  }

  // Autoplay toutes les 5s
  useEffect(() => {
    if (!isAutoPlaying || total === 0) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next, total])

  if (total === 0) return null

  // Affiche 3 cards en desktop, 1 en mobile
  // On calcule les index des 3 cards visibles
  const visibleIndexes = [
    current % total,
    (current + 1) % total,
    (current + 2) % total,
  ]

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Cards */}
      <div className={styles.track}>
        {visibleIndexes.map((idx, pos) => {
          const t = reviews[idx]
          return (
            <div
              key={`${t.author}-${idx}`}
              className={`${styles.card} ${pos === 1 ? styles.cardCenter : styles.cardSide}`}
            >
              <span className={styles.cardIndex}>0{idx + 1}</span>
              <StarRating rating={t.rating} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.divider} />
              <div className={styles.author}>
                <div className={styles.avatarWrapper}>
                  {t.profilePhoto ? (
                    <Image src={t.profilePhoto} alt={t.author} width={40} height={40} className={styles.avatar} />
                  ) : (
                    <div className={styles.avatarFallback}>{t.initial}</div>
                  )}
                  <div className={styles.avatarRing} />
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{t.author}</p>
                  <p className={styles.authorDate}>{t.date}</p>
                </div>
                <svg className={styles.googleIcon} width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        {/* Dots */}
        <div className={styles.dots}>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Avis ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className={styles.arrows}>
          <button className={styles.arrow} onClick={prev} aria-label="Précédent">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </button>
          <button className={styles.arrow} onClick={next} aria-label="Suivant">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <a
          href={`https://search.google.com/local/writereview?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaLink}
        >
          Laisser un avis Google
          <span className={styles.ctaArrow}>→</span>
        </a>
      </div>
    </div>
  )
}
