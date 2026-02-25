import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/styles/globals.css'
import { SITE } from '@/lib/constants'
import DoctolibFloat from '@/components/ui/DoctolibFloat'
import AnnouncementBanner from '@/components/ui/AnnouncementBanner'

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

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Mathieu Spaeth — Ostéopathe D.O.",
  "image": "https://ms-osteopathe.fr/images/mathieu-spaeth.png",
  "url": "https://ms-osteopathe.fr",
  "telephone": "0615938474",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "500 Avenue de l'Europe",
    "addressLocality": "Castelnau-le-Lez",
    "postalCode": "34170",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6285,
    "longitude": 3.9175
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "13:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "13:30", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "13:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:30" }
  ],
  "priceRange": "$$",
  "medicalSpecialty": "Osteopathic"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={nunito.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <AnnouncementBanner />
        {children}
        <DoctolibFloat />
      </body>
    </html>
  )
}