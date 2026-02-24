// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl     = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client côté navigateur (utilisé dans les composants 'use client')
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper : URL publique d'une image dans le bucket "gallery"
export function getGalleryImageUrl(path: string) {
  const { data } = supabase.storage.from('gallery').getPublicUrl(path)
  return data.publicUrl
}
