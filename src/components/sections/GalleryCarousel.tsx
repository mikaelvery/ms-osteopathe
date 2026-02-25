'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
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
}

export function GalleryCarousel({ images }: Props) {
  const trackRef   = useRef<HTMLDivElement>(null)
  const [active, setActive]     = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart  = useRef(0)
  const scrollStart = useRef(0)

  // Update active dot based on scroll position
  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const slideWidth = track.scrollWidth / images.length
    const idx = Math.round(track.scrollLeft / slideWidth)
    setActive(Math.max(0, Math.min(idx, images.length - 1)))
  }, [images.length])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // Scroll to slide
  function scrollTo(idx: number) {
    const track = trackRef.current
    if (!track) return
    const slideWidth = track.scrollWidth / images.length
    track.scrollTo({ left: slideWidth * idx, behavior: 'smooth' })
    setActive(idx)
  }

  // Mouse drag
  function onMouseDown(e: React.MouseEvent) {
    setIsDragging(true)
    dragStart.current   = e.clientX
    scrollStart.current = trackRef.current?.scrollLeft ?? 0
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !trackRef.current) return
    const dx = dragStart.current - e.clientX
    trackRef.current.scrollLeft = scrollStart.current + dx
  }

  function onMouseUp() { setIsDragging(false) }

  // Arrow nav
  function prev() { scrollTo(Math.max(0, active - 1)) }
  function next() { scrollTo(Math.min(images.length - 1, active + 1)) }

  return (
    <div className={styles.wrapper}>
      {/* ── Scrollable track ── */}
      <div
        ref={trackRef}
        className={`${styles.track} ${isDragging ? styles.trackDragging : ''}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {images.map((img, i) => (
          <div key={img.id} className={styles.slide}>
            <div className={styles.slideInner}>
              <Image
                src={img.url}
                alt={img.label}
                fill
                className={styles.slideImg}
                sizes="(max-width: 768px) 80vw, 40vw"
                draggable={false}
              />
              <div className={styles.slideOverlay}>
                <span className={styles.slideNum}>
                  {String(i + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
                {img.label && (
                  <p className={styles.slideLabel}>{img.label}</p>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* Right padding sentinel */}
        <div className={styles.sentinel} />
      </div>

      {/* ── Controls ── */}
      <div className={styles.controls}>
        {/* Progress bar dots */}
        <div className={styles.progress}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className={styles.arrows}>
          <button
            className={`${styles.arrow} ${active === 0 ? styles.arrowDisabled : ''}`}
            onClick={prev}
            disabled={active === 0}
            aria-label="Photo précédente"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
          </button>
          <button
            className={`${styles.arrow} ${active === images.length - 1 ? styles.arrowDisabled : ''}`}
            onClick={next}
            disabled={active === images.length - 1}
            aria-label="Photo suivante"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}