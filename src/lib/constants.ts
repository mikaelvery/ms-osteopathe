export const SITE = {
  name: 'Mathieu Spaeth',
  title: 'Mathieu Spaeth — Ostéopathe D.O.',
  description:
    'Ostéopathe D.O. à Castelnau-le-Lez. Consultations en cabinet et à domicile. Ostéopathie structurelle, viscérale et crânienne.',
  phone: '06 15 93 84 74',
  phoneRaw: '0615938474',
  email: 'contact@ms-osteopathe.fr',
  developper: 'Mikael Very',
  address: {
    street: "500 Avenue de l'Europe",
    complement: 'Fitfamily, Castelnau-le-Lez',
  },
  doctolib: 'https://www.doctolib.fr/osteopathe/le-cres/mathieu-spaeth',
  social: {
    facebook: 'https://fr-fr.facebook.com/mathieuspaeth.osteo/',
    linkedin: 'https://fr.linkedin.com/in/mathieu-spaeth-6b553114b',
  },
}

export const NAV_LINKS = [
  { label: 'Présentation', href: '#services'  },
  { label: 'À propos',     href: '/a-propos'  },
  { label: 'Cabinet',      href: '#galerie'   },
  { label: 'Avis',         href: '#avis'      },
  { label: 'FAQ',          href: '/faq'       },
  { label: 'Blog',         href: '/blog'      },
  { label: 'Contact',      href: '#contact'   },
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
  { label: 'Formation',     value: "Ostéopathe D.O. — Diplômé d'État" },
  { label: 'Spécialités',   value: 'Structurelle · Viscérale · Crânienne' },
  { label: 'Interventions', value: 'Cabinet & domicile' },
]

// Fallback local — utilisé uniquement si Supabase est indisponible
export const HOURS_FALLBACK = [
  { day: 'Lundi',    hours: '09h00 – 13h30' },
  { day: 'Mardi',    hours: '09h00 – 19h00' },
  { day: 'Mercredi', hours: '13h30 – 19h00' },
  { day: 'Jeudi',    hours: '09h00 – 19h00' },
  { day: 'Vendredi', hours: '09h00 – 13h30' },
  { day: 'Samedi',   hours: '09h00 – 13h30' },
  { day: 'Dimanche', hours: null             },
]

export const REASONS = [
  {
    num: '01',
    title: 'Rigoureux',
    desc: "L'ostéopathie est un métier exigeant. Je m'efforce d'être précis et rassurant à chaque consultation, en adaptant mon approche à votre profil et à votre sensibilité.",
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop&crop=center',
    alt: 'Mains ostéopathe précises',
  },
  {
    num: '02',
    title: 'Prévenant',
    desc: "Il m'est primordial d'accorder à mes patients une attention qui dépasse le cadre de la consultation — pour créer une véritable relation de confiance sur le long terme.",
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&h=200&fit=crop&crop=center',
    alt: 'Relation de confiance patient',
  },
  {
    num: '03',
    title: 'Pédagogue',
    desc: "Je m'applique à rendre mes patients responsables vis-à-vis de leur santé et autonomes pour la préserver — car une bonne compréhension de son corps est la meilleure prévention.",
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&crop=center',
    alt: 'Explication ostéopathie pédagogie',
  },
]