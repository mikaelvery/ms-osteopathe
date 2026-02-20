# ms-osteopathe — Site Next.js

Refonte du site de Mathieu Spaeth, ostéopathe D.O. à Castelnau-le-Lez.
Stack : **Next.js 14 · TypeScript · CSS Modules · next/font · next/image**

---

## 🚀 Démarrage rapide

```bash
cd osteo-nextjs
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   └── page.tsx            # Page d'accueil — assemble les sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx / .module.css   # Nav fixe avec scroll effect + menu mobile
│   │   └── Footer.tsx / .module.css
│   │
│   ├── sections/                      # Une section = un composant + son CSS module
│   │   ├── Hero.tsx / .module.css
│   │   ├── Services.tsx / .module.css
│   │   ├── About.tsx / .module.css
│   │   ├── Contact.tsx / .module.css
│   │   ├── Testimonials.tsx / .module.css
│   │   ├── Portrait.tsx / .module.css  # Section portrait avec masonry
│   │   ├── Gallery.tsx / .module.css   # Galerie cabinet avec masonry
│   │   └── Cta.tsx / .module.css
│   │
│   └── ui/
│       ├── AnatomySvg.tsx / .module.css  # Illustration SVG animée du hero
│
├── lib/
│   └── constants.ts        # ⭐ TOUT le contenu du site est ici
│
└── styles/
    └── globals.css         # Design tokens CSS, classes partagées (btn-primary, section-tag…)
```

---

## ✏️ Modifier le contenu

**Tout le contenu est centralisé dans `src/lib/constants.ts`** — pas besoin de toucher aux composants pour :
- Changer les textes, horaires, coordonnées
- Ajouter / retirer des témoignages ou services
- Remplacer les photos

---

## 🖼️ Remplacer les photos placeholder

1. Dépose tes photos dans `/public/images/`
2. Dans `src/lib/constants.ts`, remplace les URL Unsplash par des chemins locaux :

```ts
// Avant
src: 'https://images.unsplash.com/photo-xxx...',

// Après
src: '/images/mathieu-portrait.jpg',
```

Les composants `Portrait` et `Gallery` utilisent `next/image` avec `fill` —
les images s'adaptent automatiquement à leur conteneur.

---

## 🎨 Design system

Toutes les variables CSS sont dans `globals.css` :

| Variable        | Valeur      | Usage               |
|-----------------|-------------|---------------------|
| `--charcoal`    | `#111210`   | Fond principal      |
| `--deep`        | `#1a1c18`   | Fond sections alt   |
| `--gold`        | `#c8b98c`   | Accent principal    |
| `--gold-light`  | `#e2d4aa`   | Accent clair        |
| `--cream`       | `#f0ead8`   | Texte titres        |
| `--text`        | `#d6cfc0`   | Texte courant       |
| `--muted`       | `#7a7568`   | Texte secondaire    |
| `--font-serif`  | Cormorant   | Titres              |
| `--font-sans`   | Montserrat  | Corps de texte      |

Classes utilitaires globales : `.btn-primary`, `.btn-ghost`, `.section-tag`, `.section-title`, `.fade-up`, `.delay-1..4`

---

## 📦 Déploiement (Vercel)

```bash
npm run build   # vérifie les erreurs TypeScript et build
```

Puis déploie directement depuis GitHub sur [vercel.com](https://vercel.com) — zéro config nécessaire.

---

## 🔗 Liens utiles

- Doctolib : https://www.doctolib.fr/osteopathe/le-cres/mathieu-spaeth
- Facebook  : https://fr-fr.facebook.com/mathieuspaeth.osteo/
- LinkedIn  : https://fr.linkedin.com/in/mathieu-spaeth-6b553114b
