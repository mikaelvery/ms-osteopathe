// lib/constants.ts
// ── Centralise toutes les données du site ──
// Modifiez ce fichier pour mettre à jour le contenu sans toucher aux composants.

export const SITE = {
  name: 'Mathieu Spaeth',
  title: 'Mathieu Spaeth — Ostéopathe D.O.',
  description:
    'Ostéopathe D.O. à Castelnau-le-Lez. Consultations en cabinet et à domicile. Ostéopathie structurelle, viscérale et crânienne.',
  phone: '06 15 93 84 74',
  phoneRaw: '0615938474',
  email: 'contact@ms-osteopathe.fr',
  address: {
    street: '500 Avenue de l\'Europe',
    complement: 'Fitfamily, Castelnau-le-Lez',
  },
  doctolib: 'https://www.doctolib.fr/osteopathe/le-cres/mathieu-spaeth',
  social: {
    facebook: 'https://fr-fr.facebook.com/mathieuspaeth.osteo/',
    linkedin: 'https://fr.linkedin.com/in/mathieu-spaeth-6b553114b',
  },
}

export const NAV_LINKS = [
  { label: 'Prestations', href: '#services' },
  { label: 'À propos',    href: '#about'    },
  { label: 'Cabinet',     href: '#galerie'  },
  { label: 'Avis',        href: '#avis'     },
  { label: 'Contact',     href: '#contact'  },
]

export const STATS = [
  { num: '276+', label: 'Avis Google'       },
  { num: '5.0',  label: 'Note moyenne'      },
  { num: '10+',  label: 'Années d\'expérience' },
]

export const SERVICES = [
  {
    num: '01',
    icon: '⊕',
    title: 'Ostéopathie structurelle',
    desc: 'Traitement des tensions musculaires, articulaires et vertébrales. Indiquée pour les douleurs dorsales, cervicales et les troubles posturaux.',
  },
  {
    num: '02',
    icon: '◎',
    title: 'Ostéopathie viscérale',
    desc: 'Libération des tensions des organes abdominaux et pelviens. Agit sur les troubles digestifs, gynécologiques et les cicatrices.',
  },
  {
    num: '03',
    icon: '◉',
    title: 'Ostéopathie crânienne',
    desc: 'Approche douce des os du crâne et de la colonne vertébrale. Indiquée pour les maux de tête, les troubles du sommeil et le stress.',
  },
]

export const QUALITIES = [
  {
    name: 'Rigoureux',
    desc: "L'ostéopathie est un métier exigeant. Je m'efforce d'être précis et rassurant envers chaque patient.",
  },
  {
    name: 'Prévenant',
    desc: 'Mon attention dépasse le cadre de la consultation pour créer une véritable relation de confiance durable.',
  },
  {
    name: 'Pédagogue',
    desc: 'Je rends mes patients responsables et autonomes vis-à-vis de leur santé, pour des résultats qui perdurent.',
  },
]

export const PRACTITIONER_DETAILS = [
  { label: 'Formation',     value: 'Ostéopathe D.O. — Diplômé d\'État' },
  { label: 'Spécialités',   value: 'Structurelle · Viscérale · Crânienne' },
  { label: 'Interventions', value: 'Cabinet & domicile' },
]

export const HOURS = [
  { day: 'Lundi',     hours: '09h00 – 13h30' },
  { day: 'Mardi',     hours: '09h00 – 19h00' },
  { day: 'Mercredi',  hours: '13h30 – 19h00' },
  { day: 'Jeudi',     hours: '09h00 – 19h00' },
  { day: 'Vendredi',  hours: '09h00 – 13h30' },
  { day: 'Samedi',    hours: '09h00 – 13h30' },
  { day: 'Dimanche',  hours: null             },
]

export const TESTIMONIALS = [
  {
    text: "Il a toujours été attentif et de bon conseil, notamment lorsque j'ai traîné pendant de longs mois des problèmes d'épaule. Je l'ai recommandé à ma conjointe qui en est aussi très satisfaite.",
    author: 'Serruchox7',
    date: 'Janvier 2026',
    initial: 'S',
  },
  {
    text: "La prise en charge a été globale, de la tête aux pieds. On sent un professionnel sérieux, à l'écoute et soucieux du bien-être global du patient. J'ai ressenti une amélioration nette après la séance.",
    author: 'Louise M.',
    date: 'Janvier 2026',
    initial: 'L',
  },
  {
    text: "Très humain et à l'écoute, je n'ai jamais eu de douleur après les séances. Les manipulations sont douces mais efficaces, et les résultats se font sentir rapidement. Je recommande les yeux fermés.",
    author: 'Karl K.',
    date: 'Janvier 2026',
    initial: 'K',
  },
]

// Remplacez les src par les vraies photos une fois disponibles.
// Placez vos images dans /public/images/ et utilisez des chemins comme '/images/cabinet-1.jpg'
export const PORTRAIT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format',
    alt: 'Portrait Mathieu Spaeth ostéopathe',
    label: 'Mathieu Spaeth',
    isMain: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80&auto=format',
    alt: 'Consultation ostéopathie',
    isMain: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80&auto=format',
    alt: 'Soin ostéopathique',
    isMain: false,
  },
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format',
    alt: "Cabinet d'ostéopathie",
    label: 'Salle de consultation',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&q=80&auto=format',
    alt: 'Table de consultation',
    label: 'Table de soin',
  },
  {
    src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&q=80&auto=format',
    alt: 'Équipement ostéopathie',
    label: 'Équipement',
  },
  {
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80&auto=format',
    alt: 'Accueil cabinet',
    label: 'Accueil',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format',
    alt: 'Soin du dos',
    label: 'Soins du dos',
  },
  {
    src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=80&auto=format',
    alt: 'Cabinet vue générale',
    label: "Vue d'ensemble",
  },
]
