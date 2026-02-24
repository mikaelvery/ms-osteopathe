'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { HourRow } from '@/types/supabase'
import styles from './hours.module.css'

export default function HoursAdmin() {
  const [rows, setRows]       = useState<HourRow[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving]   = useState(false)
  const [toast, setToast]     = useState('')

  async function loadHours() {
    const { data } = await supabase
      .from('hours')
      .select('*')
      .order('order', { ascending: true })
    setRows(data ?? [])
    setLoading(false)
  }

  useEffect(() => { loadHours() }, [])

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  function updateRow(id: string, field: 'hours', value: string | null) {
    setRows(prev => prev.map(r => r.id === id ? { ...r, [field]: value } : r))
  }

  async function saveAll() {
    setSaving(true)
    await Promise.all(
      rows.map(row =>
        supabase.from('hours').update({ hours: row.hours }).eq('id', row.id)
      )
    )
    setSaving(false)
    showToast('Horaires enregistrés !')
  }

  return (
    <div>
      {toast && <div className={styles.toast}>{toast}</div>}

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Horaires</h1>
          <p className={styles.subtitle}>Modifiez les horaires affichés sur le site.</p>
        </div>
        <button className={styles.saveBtn} onClick={saveAll} disabled={saving || loading}>
          {saving ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>

      <div className={styles.tip}>
        <span>ℹ</span>
        Laissez l'heure vide pour indiquer <strong>Fermé</strong>.
      </div>

      {loading ? (
        <p className={styles.loading}>Chargement...</p>
      ) : (
        <div className={styles.table}>
          {rows.map(row => (
            <div key={row.id} className={`${styles.row} ${!row.hours ? styles.rowClosed : ''}`}>
              <span className={styles.day}>{row.day}</span>

              <div className={styles.inputWrap}>
                <input
                  type="text"
                  value={row.hours ?? ''}
                  onChange={e => updateRow(row.id, 'hours', e.target.value || null)}
                  placeholder="Ex: 09h00 – 19h00"
                  className={styles.input}
                  disabled={!row.hours && row.hours !== ''}
                />
                {!row.hours && (
                  <span className={styles.closedTag}>Fermé</span>
                )}
              </div>

              <button
                className={`${styles.toggleBtn} ${row.hours ? styles.toggleOpen : styles.toggleClosed}`}
                onClick={() => updateRow(row.id, 'hours', row.hours ? null : '09h00 – 17h00')}
                title={row.hours ? 'Marquer comme fermé' : 'Marquer comme ouvert'}
              >
                {row.hours ? 'Marquer fermé' : 'Marquer ouvert'}
              </button>
            </div>
          ))}
        </div>
      )}

      <div className={styles.preview}>
        <h2 className={styles.previewTitle}>Aperçu</h2>
        <div className={styles.previewList}>
          {rows.map(row => (
            <div key={row.id} className={styles.previewRow}>
              <span className={styles.previewDay}>{row.day}</span>
              <span className={row.hours ? styles.previewHours : styles.previewClosed}>
                {row.hours ?? 'Fermé'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
