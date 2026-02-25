import { createBrowserClient } from '@supabase/ssr'

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export function getGalleryImageUrl(path: string) {
  const { data } = supabase.storage.from('gallery').getPublicUrl(path)
  return data.publicUrl
}