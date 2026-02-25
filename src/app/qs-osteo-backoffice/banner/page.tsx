'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import styles from '../dashboard.module.css'
import bannerStyles from './banner.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)


export default function BannerAdmin() {
  const [message, setMessage] = useState('')
  const [active, setActive] = useState(false)
  const [type, setType] = useState<'info' | 'warning' | 'success'>('info')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [bannerId, setBannerId] = useState<string | null>(null)

  useEffect(() => {
    supabase.from('banner').select('*').single().then(({ data }) => {
      if (data) {
        setBannerId(data.id) 
        setMessage(data.message)
        setActive(data.active)
        setType(data.type)
      }
    })
  }, [])

  async function handleSave() {
    if (!bannerId) return
    setSaving(true)
    const { error } = await supabase
      .from('banner')
      .update({ message, active, type })
      .eq('id', bannerId)
    if (error) console.error('Erreur Supabase:', error)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Bandeau <em>d'annonce</em></h1>
        <p className={styles.subtitle}>
          Affiché en haut du site quand activé — idéal pour les congés ou fermetures exceptionnelles.
        </p>
      </div>

      <div className={bannerStyles.card}>

        {/* Toggle actif */}
        <div className={bannerStyles.row}>
          <label className={bannerStyles.label}>Afficher le bandeau</label>
          <button
            className={`${bannerStyles.toggle} ${active ? bannerStyles.toggleOn : ''}`}
            onClick={() => setActive(o => !o)}
            aria-label="Toggle bandeau"
          >
            <span className={bannerStyles.toggleThumb} />
          </button>
        </div>

        {/* Type */}
        <div className={bannerStyles.field}>
          <label className={bannerStyles.label}>Type</label>
          <div className={bannerStyles.typeGrid}>
            {(['info', 'warning', 'success'] as const).map(t => (
              <button
                key={t}
                className={`${bannerStyles.typeBtn} ${bannerStyles[t]} ${type === t ? bannerStyles.typeBtnActive : ''}`}
                onClick={() => setType(t)}
              >
                {t === 'info' ? 'ℹ Information' : t === 'warning' ? '⚠ Attention' : '✓ Succès'}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className={bannerStyles.field}>
          <label className={bannerStyles.label}>Message</label>
          <textarea
            className={bannerStyles.textarea}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Ex : Cabinet fermé du 15 au 22 août. Bonne fête à tous !"
            rows={3}
          />
          <p className={bannerStyles.hint}>{message.length} caractères</p>
        </div>

        {/* Aperçu */}
        {message && (
          <div className={bannerStyles.preview}>
            <p className={bannerStyles.previewLabel}>Aperçu</p>
            <div className={`${bannerStyles.previewBanner} ${bannerStyles[`preview_${type}`]}`}>
              <span>{type === 'warning' ? '⚠' : type === 'success' ? '✓' : 'ℹ'}</span>
              <span>{message}</span>
            </div>
          </div>
        )}

        {/* Save */}
        <button
          className={bannerStyles.saveBtn}
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Enregistrement…' : saved ? '✓ Enregistré !' : 'Enregistrer'}
        </button>

      </div>
    </div>
  )
}
