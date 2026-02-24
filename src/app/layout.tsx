import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/styles/globals.css'
import { SITE } from '@/lib/constants'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: ['ostéopathe', 'Castelnau-le-Lez', 'ostéopathie', 'Mathieu Spaeth', 'ostéopathie structurelle', 'ostéopathie viscérale'],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body>{children}</body>
    </html>
  )
}
