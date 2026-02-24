'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { Testimonial } from '@/types/supabase'
import styles from './testimonials.module.css'

const EMPTY: Omit<Testimonial, 'id' | 'created_at'> = {
  author: '', date: '', text: '', initial: '', visible: true,
}

export default function TestimonialsAdmin() {
  const [items, setItems]     = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm]       = useState({ ...EMPTY })
  const [saving, setSaving]   = useState(false)
  const [toast, setToast]     = useState('')
  const [editId, setEditId]   = useState<string | null>(null)

  async function loadTestimonials() {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
    setItems(data ?? [])
    setLoading(false)
  }

  useEffect(() => { loadTestimonials() }, [])

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  // Auto-fill initial from author name
  function handleAuthorChange(value: string) {
    setForm(f => ({
      ...f,
      author: value,
      initial: value.trim().charAt(0).toUpperCase() || f.initial,
    }))
  }

  async function handleSave() {
    if (!form.author || !form.text) return
    setSaving(true)

    if (editId) {
      await supabase.from('testimonials').update(form).eq('id', editId)
      showToast('Témoignage modifié.')
      setEditId(null)
    } else {
      await supabase.from('testimonials').insert(form)
      showToast('Témoignage ajouté !')
    }

    setForm({ ...EMPTY })
    await loadTestimonials()
    setSaving(false)
  }

  function startEdit(item: Testimonial) {
    setEditId(item.id)
    setForm({
      author: item.author, date: item.date, text: item.text,
      initial: item.initial, visible: item.visible,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function cancelEdit() {
    setEditId(null)
    setForm({ ...EMPTY })
  }

  async function toggleVisible(item: Testimonial) {
    const visible = !item.visible
    await supabase.from('testimonials').update({ visible }).eq('id', item.id)
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, visible } : i))
    showToast(visible ? 'Témoignage affiché.' : 'Témoignage masqué.')
  }

  async function handleDelete(id: string) {
    if (!confirm('Supprimer ce témoignage ?')) return
    await supabase.from('testimonials').delete().eq('id', id)
    setItems(prev => prev.filter(i => i.id !== id))
    showToast('Témoignage supprimé.')
  }

  return (
    <div>
      {toast && <div className={styles.toast}>{toast}</div>}

      {/* Form */}
      <div className={styles.formCard}>
        <h2 className={styles.formTitle}>
          {editId ? 'Modifier le témoignage' : 'Ajouter un témoignage'}
        </h2>

        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label>Nom du patient *</label>
            <input
              type="text"
              value={form.author}
              onChange={e => handleAuthorChange(e.target.value)}
              placeholder="Marie D."
            />
          </div>
          <div className={styles.field}>
            <label>Date</label>
            <input
              type="text"
              value={form.date}
              onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
              placeholder="Janvier 2026"
            />
          </div>
          <div className={styles.field}>
            <label>Initiale (avatar)</label>
            <input
              type="text"
              value={form.initial}
              maxLength={1}
              onChange={e => setForm(f => ({ ...f, initial: e.target.value.toUpperCase() }))}
              placeholder="M"
              className={styles.initialInput}
            />
          </div>
          <div className={styles.field}>
            <label>
              <input
                type="checkbox"
                checked={form.visible}
                onChange={e => setForm(f => ({ ...f, visible: e.target.checked }))}
              />
              {' '}Visible sur le site
            </label>
          </div>
        </div>

        <div className={styles.field}>
          <label>Texte du témoignage *</label>
          <textarea
            value={form.text}
            onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
            placeholder="Les soins ont été très efficaces..."
            rows={4}
          />
        </div>

        <div className={styles.formActions}>
          {editId && (
            <button className={styles.cancelBtn} onClick={cancelEdit}>Annuler</button>
          )}
          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={saving || !form.author || !form.text}
          >
            {saving ? 'Enregistrement...' : editId ? 'Modifier' : 'Ajouter'}
          </button>
        </div>
      </div>

      {/* List */}
      <h1 className={styles.listTitle}>
        Témoignages
        <span className={styles.count}>{items.length}</span>
      </h1>

      {loading ? (
        <p className={styles.loading}>Chargement...</p>
      ) : (
        <div className={styles.list}>
          {items.map(item => (
            <div key={item.id} className={`${styles.item} ${!item.visible ? styles.itemHidden : ''}`}>
              <div className={styles.itemAvatar}>{item.initial}</div>
              <div className={styles.itemBody}>
                <div className={styles.itemMeta}>
                  <span className={styles.itemAuthor}>{item.author}</span>
                  <span className={styles.itemDate}>{item.date}</span>
                  {!item.visible && <span className={styles.hiddenBadge}>Masqué</span>}
                </div>
                <p className={styles.itemText}>{item.text}</p>
              </div>
              <div className={styles.itemActions}>
                <button
                  className={styles.iconBtn}
                  onClick={() => toggleVisible(item)}
                  title={item.visible ? 'Masquer' : 'Afficher'}
                >
                  {item.visible ? '◉' : '◎'}
                </button>
                <button
                  className={styles.iconBtn}
                  onClick={() => startEdit(item)}
                  title="Modifier"
                >✎</button>
                <button
                  className={`${styles.iconBtn} ${styles.deleteIconBtn}`}
                  onClick={() => handleDelete(item.id)}
                  title="Supprimer"
                >✕</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
