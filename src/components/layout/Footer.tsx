import Link from 'next/link'
import { SITE } from '@/lib/constants'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © {new Date().getFullYear()} {SITE.developper} — Ostéopathe D.O. · Castelnau-le-Lez
      </p>
      <nav className={styles.links}>
        <Link href="/mentions-legales">Mentions légales</Link>
        <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </footer>
  )
}
