'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { NAV_LINKS, SITE } from '@/lib/constants'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        {SITE.name}
        <span>Ostéopathe D.O. — Castelnau-le-Lez</span>
      </Link>

      {/* Desktop links */}
      <ul className={styles.links}>
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
        <li>
          <a
            href={SITE.doctolib}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Prendre RDV
          </a>
        </li>
      </ul>

      {/* Mobile burger */}
      <button
        className={styles.burger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menu"
      >
        <span className={menuOpen ? styles.burgerOpen : ''} />
        <span className={menuOpen ? styles.burgerOpen : ''} />
        <span className={menuOpen ? styles.burgerOpen : ''} />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.drawer}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.doctolib}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerCta}
            onClick={() => setMenuOpen(false)}
          >
            Prendre RDV sur Doctolib →
          </a>
        </div>
      )}
    </nav>
  )
}
