// src/types/supabase.ts

export type GalleryItem = {
  id: string
  url: string
  label: string
  order: number
  created_at: string
}

export type HourRow = {
  id: string
  day: string
  hours: string | null  // null = fermé
  order: number
}

export type Testimonial = {
  id: string
  author: string
  date: string
  text: string
  initial: string
  visible: boolean
  created_at: string
}
