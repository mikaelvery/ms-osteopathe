# Espace Admin — MS Ostéopathe

Interface d'administration pour que Mathieu puisse gérer son site en autonomie.
Stack : **Next.js 14 · Supabase (Auth + PostgreSQL + Storage) · CSS Modules**

---

## 🚀 Setup en 5 étapes

### 1. Installer les dépendances

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

### 2. Créer le projet Supabase

1. Va sur [supabase.com](https://supabase.com) → **New project**
2. Note ton **Project URL** et ta **anon key** (Settings > API)

### 3. Créer la base de données

Dans Supabase > **SQL Editor** > colle et exécute `supabase-schema.sql`

### 4. Créer le compte admin de Mathieu

Dans Supabase > **Authentication > Users > Invite user**
- Email : `ms.osteo34@gmail.com`
- Il recevra un email pour définir son mot de passe

### 5. Configurer les variables d'environnement

Copie `.env.local.example` en `.env.local` et remplis :
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

---

## 📁 Fichiers à intégrer dans le projet principal

```
middleware.ts                          → racine du projet
src/lib/supabase.ts                    → lib/
src/types/supabase.ts                  → types/
src/app/admin/login/page.tsx           → app/admin/login/
src/app/admin/layout.tsx               → app/admin/
src/app/admin/page.tsx                 → app/admin/
src/app/admin/gallery/page.tsx         → app/admin/gallery/
src/app/admin/hours/page.tsx           → app/admin/hours/
src/app/admin/testimonials/page.tsx    → app/admin/testimonials/
+ tous les .module.css correspondants
```

---

## 🔐 Sécurité

- **Middleware Next.js** : toute URL `/admin/*` redirige vers `/admin/login` si non connecté
- **Supabase RLS** : lecture publique, écriture uniquement pour les utilisateurs authentifiés
- **Supabase Auth** : session JWT gérée automatiquement, expire après inactivité

---

## 🔄 Connecter l'admin au site public

Pour que le site affiche les données dynamiques (galerie, horaires, témoignages),
remplace dans les composants concernés les données statiques de `constants.ts`
par des appels Supabase côté serveur :

```tsx
// src/components/sections/Gallery.tsx
import { supabase } from '@/lib/supabase'

export default async function Gallery() {
  const { data: images } = await supabase
    .from('gallery')
    .select('*')
    .order('order', { ascending: true })

  // ... utilise images au lieu de GALLERY_IMAGES
}
```

---

## 🌐 URL d'accès

- **Site public** : `https://ms-osteopathe.fr`
- **Admin** : `https://ms-osteopathe.fr/admin`
- **Login** : `https://ms-osteopathe.fr/admin/login`
