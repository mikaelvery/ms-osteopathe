import { createClient } from '@supabase/supabase-js'
import styles from './AnnouncementBanner.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function AnnouncementBanner() {
  const { data } = await supabase
    .from('banner')
    .select('*')
    .single()

  if (!data || !data.active || !data.message) return null

  return (
    <>
      <style>{`:root { --banner-height: 40px; }`}</style>
      <div className={`${styles.banner} ${styles[data.type]}`}>
        <span className={styles.icon}>
          {data.type === 'warning' ? '⚠' : data.type === 'success' ? '✓' : 'ℹ'}
        </span>
        <p className={styles.message}>{data.message}</p>
      </div>
    </>
  )
}
