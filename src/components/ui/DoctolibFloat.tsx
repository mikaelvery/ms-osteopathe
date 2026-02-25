'use client'
import { useState, useEffect } from 'react'
import { SITE } from '@/lib/constants'
import styles from './DoctolibFloat.module.css'

export default function DoctolibFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={SITE.doctolib}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      aria-label="Prendre rendez-vous sur Doctolib"
    >
      <CalendarIcon />
      <span className={styles.label}>Prendre RDV</span>
    </a>
  )
}

function CalendarIcon() {
  return (
    <svg
      width="18" height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}
