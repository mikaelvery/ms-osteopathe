'use client'

import { useRouter, usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import styles from './layout.module.css'

// ── Chemin secret ────────────────────────────────────────────────
// Pour changer l'URL admin, modifie uniquement BASE_PATH ici
// + renomme le dossier src/app/admin en conséquence
const BASE_PATH = '/admin'

const NAV = [
  { href: BASE_PATH,                  icon: '⊞', label: 'Tableau de bord' },
  { href: `${BASE_PATH}/gallery`,     icon: '◫', label: 'Galerie photos'  },
  { href: `${BASE_PATH}/hours`,       icon: '◷', label: 'Horaires'        },
  { href: `${BASE_PATH}/banner`,      icon: '⚑', label: 'Bandeau'         },
  { href: `${BASE_PATH}/blog`,        icon: '✎', label: 'Blog'            },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter()
  const pathname = usePathname()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push(`${BASE_PATH}/login`)
  }

  if (pathname === `${BASE_PATH}/login`) return <>{children}</>

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <span className={styles.sidebarName}>Mathieu Spaeth</span>
          <span className={styles.sidebarSub}>Administration</span>
        </div>

        <nav className={styles.nav}>
          {NAV.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navItem} ${pathname === link.href ? styles.navActive : ''}`}
            >
              <span className={styles.navIcon}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <a href="/" target="_blank" className={styles.siteLink}>
            ↗ Voir le site
          </a>
          <a href="/admin/logout" className={styles.logoutBtn}>
            Déconnexion
          </a>
        </div>
      </aside>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
