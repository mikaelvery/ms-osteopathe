'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import type { GalleryItem } from '@/types/supabase'
import styles from './gallery.module.css'

export default function GalleryAdmin() {
  const [items, setItems]       = useState<GalleryItem[]>([])
  const [loading, setLoading]   = useState(true)
  const [uploading, setUploading] = useState(false)
  const [editLabel, setEditLabel] = useState<{ id: string; value: string } | null>(null)
  const [toast, setToast]       = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  // ── Load gallery ──────────────────────────────────────────────
  async function loadGallery() {
    const { data } = await supabase
      .from('gallery')
      .select('*')
      .order('order', { ascending: true })
    setItems(data ?? [])
    setLoading(false)
  }

  useEffect(() => { loadGallery() }, [])

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  // ── Upload photos ─────────────────────────────────────────────
  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
  const files = Array.from(e.target.files ?? [])
  if (!files.length) return
  setUploading(true)

  for (const file of files) {
    console.log('📁 Fichier:', file.name, file.size, file.type)

    const ext  = file.name.split('.').pop()
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

    // Upload Storage
    const { data: storageData, error: uploadErr } = await supabase.storage
      .from('gallery')
      .upload(path, file)

    console.log('📦 Storage:', storageData, uploadErr)
    if (uploadErr) {
      console.error('❌ Storage error:', uploadErr.message)
      showToast(`Erreur upload: ${uploadErr.message}`)
      continue
    }

    // URL publique
    const { data: { publicUrl } } = supabase.storage
      .from('gallery')
      .getPublicUrl(path)

    console.log('🔗 URL:', publicUrl)

    // Insert DB
    const { data: dbData, error: dbErr } = await supabase
      .from('gallery')
      .insert({
        url: publicUrl,
        label: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        order: items.length + 1,
      })
      .select()

    console.log('🗄️ DB insert:', dbData, dbErr)
    if (dbErr) {
      console.error('❌ DB error:', dbErr.message)
      showToast(`Erreur DB: ${dbErr.message}`)
    }
  }

  await loadGallery()
  setUploading(false)
  if (fileRef.current) fileRef.current.value = ''
}

  // ── Delete photo ──────────────────────────────────────────────
  async function handleDelete(item: GalleryItem) {
    if (!confirm(`Supprimer la photo "${item.label}" ?`)) return

    // Extract storage path from URL
    const path = item.url.split('/gallery/')[1]
    await supabase.storage.from('gallery').remove([path])
    await supabase.from('gallery').delete().eq('id', item.id)

    setItems(prev => prev.filter(i => i.id !== item.id))
    showToast('Photo supprimée.')
  }

  // ── Update label ──────────────────────────────────────────────
  async function saveLabel(id: string, label: string) {
    await supabase.from('gallery').update({ label }).eq('id', id)
    setItems(prev => prev.map(i => i.id === id ? { ...i, label } : i))
    setEditLabel(null)
    showToast('Légende mise à jour.')
  }

  // ── Move order ────────────────────────────────────────────────
  async function moveItem(index: number, dir: -1 | 1) {
    const newItems = [...items]
    const swapIdx  = index + dir
    if (swapIdx < 0 || swapIdx >= newItems.length) return;
    [newItems[index], newItems[swapIdx]] = [newItems[swapIdx], newItems[index]]

    setItems(newItems)
    // Update order in DB
    await Promise.all(
      newItems.map((item, i) =>
        supabase.from('gallery').update({ order: i }).eq('id', item.id)
      )
    )
  }

  // ── Toggle portrait ───────────────────────────────────────────
  async function togglePortrait(item: GalleryItem) {
    const is_portrait = !item.is_portrait
    await supabase.from('gallery').update({ is_portrait }).eq('id', item.id)
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, is_portrait } : i))
    showToast(is_portrait ? '⭐ Photo ajoutée au portrait !' : 'Photo retirée du portrait.')
  }

  return (
    <div>
      {/* Toast */}
      {toast && <div className={styles.toast}>{toast}</div>}

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Galerie photos</h1>
          <p className={styles.subtitle}>{items.length} photo{items.length !== 1 ? 's' : ''} en ligne</p>
        </div>
        <button className={styles.uploadBtn} onClick={() => fileRef.current?.click()} disabled={uploading}>
          {uploading ? 'Envoi...' : '+ Ajouter des photos'}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className={styles.fileInput}
          onChange={handleUpload}
        />
      </div>

      {/* Drop zone */}
      <div
        className={styles.dropZone}
        onClick={() => fileRef.current?.click()}
        onDragOver={e => e.preventDefault()}
        onDrop={async e => {
          e.preventDefault()
          const files = Array.from(e.dataTransfer.files)
          if (!files.length) return
          setUploading(true)

          for (const file of files) {
            const ext  = file.name.split('.').pop()
            const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

            const { error: uploadErr } = await supabase.storage
              .from('gallery')
              .upload(path, file)
            if (uploadErr) { console.error(uploadErr); continue }

            const { data: { publicUrl } } = supabase.storage
              .from('gallery')
              .getPublicUrl(path)

            await supabase.from('gallery').insert({
              url: publicUrl,
              label: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
              order: items.length + 1,
            })
          }

          await loadGallery()
          setUploading(false)
          showToast(`${files.length} photo${files.length > 1 ? 's' : ''} ajoutée${files.length > 1 ? 's' : ''} !`)
        }}
      >
        <span className={styles.dropIcon}>◫</span>
        <p>{uploading ? 'Envoi en cours...' : <>Glissez vos photos ici ou <span>cliquez pour parcourir</span></>}</p>
        <p className={styles.dropHint}>JPG, PNG, WebP — max 5 Mo par photo</p>
      </div>

      {/* Gallery grid */}
      {loading ? (
        <p className={styles.loading}>Chargement...</p>
      ) : items.length === 0 ? (
        <p className={styles.empty}>Aucune photo pour l'instant.</p>
      ) : (
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={item.id} className={styles.item}>
              {/* Image */}
              <div className={styles.imgWrap}>
                <Image src={item.url} alt={item.label} fill className={styles.img} sizes="200px" />
              </div>

              {/* Label */}
              {editLabel?.id === item.id ? (
                <div className={styles.labelEdit}>
                  <input
                    autoFocus
                    value={editLabel.value}
                    onChange={e => setEditLabel({ id: item.id, value: e.target.value })}
                    onKeyDown={e => {
                      if (e.key === 'Enter') saveLabel(item.id, editLabel.value)
                      if (e.key === 'Escape') setEditLabel(null)
                    }}
                  />
                  <button onClick={() => saveLabel(item.id, editLabel.value)}>✓</button>
                </div>
              ) : (
                <button
                  className={styles.label}
                  onClick={() => setEditLabel({ id: item.id, value: item.label })}
                  title="Cliquer pour modifier la légende"
                >
                  {item.label || 'Sans légende'} ✎
                </button>
              )}

              {/* Actions */}
              <div className={styles.actions}>
                {/* ← Bouton portrait */}
                <button
                  className={`${styles.actionBtn} ${item.is_portrait ? styles.portraitActive : ''}`}
                  onClick={() => togglePortrait(item)}
                  title={item.is_portrait ? 'Retirer du portrait' : 'Utiliser pour le portrait'}
                >⭐</button>

                <button
                  className={styles.actionBtn}
                  onClick={() => moveItem(index, -1)}
                  disabled={index === 0}
                  title="Déplacer à gauche"
                >←</button>
                <button
                  className={styles.actionBtn}
                  onClick={() => moveItem(index, 1)}
                  disabled={index === items.length - 1}
                  title="Déplacer à droite"
                >→</button>
                <button
                  className={`${styles.actionBtn} ${styles.deleteBtn}`}
                  onClick={() => handleDelete(item)}
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
