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
  // { num: '276+', label: 'Avis Google'       },
  // { num: '5.0',  label: 'Note moyenne'      },
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
