'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './GalleryCarousel.module.css'

interface GalleryImage {
  id: string
  url: string
  label: string
  order: number
}

interface Props {
  images: GalleryImage[]
  title: string
  desc: string
  count: number
}

export function GalleryCarousel({ images, title, desc, count }: Props) {
  const trackRef   = useRef<HTMLDivElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)
  const [active, setActive]         = useState(0)
  const [textHidden, setTextHidden] = useState(false)

  // Drag + momentum
  const dragRef = useRef({
    dragging: false,
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    rafId: 0,
  })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const textSlide = textRef.current
      if (textSlide) setTextHidden(track.scrollLeft > textSlide.offsetWidth * 0.5)
      const slides = track.querySelectorAll<HTMLElement>('[data-slide]')
      let closest = 0, minDist = Infinity
      slides.forEach((el, i) => {
        const dist = Math.abs(el.getBoundingClientRect().left - track.getBoundingClientRect().left)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setActive(closest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToSlide(idx: number) {
    const track = trackRef.current
    if (!track) return
    const target = track.querySelector<HTMLElement>(`[data-slide="${idx}"]`)
    if (!target) return
    track.scrollTo({ left: target.offsetLeft - 24, behavior: 'smooth' })
    setActive(idx)
  }

  function onPointerDown(e: React.PointerEvent) {
    const track = trackRef.current
    if (!track) return
    // Annule le momentum en cours
    cancelAnimationFrame(dragRef.current.rafId)
    dragRef.current = {
      dragging: true,
      startX: e.clientX,
      scrollLeft: track.scrollLeft,
      lastX: e.clientX,
      lastTime: performance.now(),
      velocity: 0,
      rafId: 0,
    }
    track.setPointerCapture(e.pointerId)
    track.style.cursor = 'grabbing'
  }

  function onPointerMove(e: React.PointerEvent) {
    const d = dragRef.current
    if (!d.dragging || !trackRef.current) return

    const now = performance.now()
    const dt = now - d.lastTime
    if (dt > 0) {
      // Vélocité en px/ms (lissée)
      const rawVelocity = (d.lastX - e.clientX) / dt
      d.velocity = d.velocity * 0.6 + rawVelocity * 0.4
    }
    d.lastX = e.clientX
    d.lastTime = performance.now()

    trackRef.current.scrollLeft = d.scrollLeft + (d.startX - e.clientX)
  }

  function onPointerUp(e: React.PointerEvent) {
    const d = dragRef.current
    d.dragging = false
    if (trackRef.current) {
      trackRef.current.releasePointerCapture(e.pointerId)
      trackRef.current.style.cursor = 'grab'
    }

    // Lance le momentum
    const track = trackRef.current
    if (!track) return

    const initialVelocity = d.velocity * 16 // px par frame à 60fps
    let velocity = initialVelocity

    function momentum() {
      if (!track) return
      velocity *= 0.92 // friction
      if (Math.abs(velocity) < 0.5) return // stop
      track.scrollLeft += velocity
      d.rafId = requestAnimationFrame(momentum)
    }

    if (Math.abs(velocity) > 1) {
      d.rafId = requestAnimationFrame(momentum)
    }
  }

  const canPrev = active > 0
  const canNext = active < images.length - 1

  return (
    <div className={styles.root}>
      <div className={`${styles.fade} ${styles.fadeLeft}`} />
      <div className={`${styles.fade} ${styles.fadeRight}`} />

      <button
        className={`${styles.arrow} ${styles.arrowLeft} ${textHidden && canPrev ? styles.arrowShow : ''}`}
        onClick={() => scrollToSlide(active - 1)}
        aria-label="Précédent"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
      </button>

      <button
        className={`${styles.arrow} ${styles.arrowRight} ${textHidden && canNext ? styles.arrowShow : ''}`}
        onClick={() => scrollToSlide(active + 1)}
        aria-label="Suivant"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>

      {/* Desktop track */}
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div ref={textRef} className={styles.textSlide}>
          <p className={styles.tag}>Le cabinet</p>
          <h2 className={styles.textTitle}>{title}</h2>
          <p className={styles.textDesc}>{desc}</p>
          <div className={styles.textDivider} />
          <p className={styles.textCount}>{count} photo{count > 1 ? 's' : ''}</p>
        </div>

        {images.map((img, i) => (
          <div key={img.id} data-slide={i} className={styles.slide}>
            <div className={styles.imgWrap}>
              <Image
                src={img.url}
                alt={img.label || 'Cabinet Mathieu Spaeth'}
                fill
                className={styles.img}
                sizes="(max-width: 768px) 72vw, 30vw"
                draggable={false}
              />
            </div>
            {img.label && (
              <div className={styles.slideText}>
                <p className={styles.slideLabel}>{img.label}</p>
              </div>
            )}
          </div>
        ))}
        <div className={styles.endPad} />
      </div>

      {/* Mobile */}
      <div className={styles.mobileLayout}>
        <div className={styles.mobileText}>
          <h2 className={styles.textTitle}>{title}</h2>
          <p className={styles.textDesc}>{desc}</p>
          <div className={styles.textDivider} />
          <p className={styles.textCount}>{count} photo{count > 1 ? 's' : ''}</p>
        </div>
        <div className={styles.mobileTrack}>
          {images.map((img) => (
            <div key={img.id} className={styles.slide}>
              <div className={styles.imgWrap}>
                <Image
                  src={img.url}
                  alt={img.label || 'Cabinet Mathieu Spaeth'}
                  fill
                  className={styles.img}
                  sizes="72vw"
                  draggable={false}
                />
              </div>
              {img.label && (
                <div className={styles.slideText}>
                  <p className={styles.slideLabel}>{img.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}