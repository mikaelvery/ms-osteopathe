'use client'
import { useEffect, useState, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import styles from '../../dashboard.module.css'
import blogStyles from '../blog.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function extractYoutubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null
}

export default function EditPost() {
  const { id } = useParams<{ id: string }>()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)
  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    supabase.from('posts').select('*').eq('id', id).single().then(({ data }) => {
      if (data) {
        setTitle(data.title)
        setExcerpt(data.excerpt ?? '')
        setContent(data.content ?? '')
        setPublished(data.published)
        setCoverImage(data.cover_image ?? null)
        setYoutubeUrl(data.youtube_url ?? '')
      }
    })
  }, [id])

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)

    const ext = file.name.split('.').pop()
    const path = `blog-covers/${id}-${Date.now()}.${ext}`

    const { error } = await supabase.storage
      .from('media')
      .upload(path, file, { upsert: true })

    if (!error) {
      const { data: urlData } = supabase.storage.from('media').getPublicUrl(path)
      setCoverImage(urlData.publicUrl)
    }
    setUploading(false)
  }

  async function handleRemoveCover() {
    setCoverImage(null)
  }

  async function handleSave() {
    setSaving(true)
    await supabase.from('posts').update({
      title,
      excerpt,
      content,
      published,
      cover_image: coverImage ?? null,
      youtube_url: youtubeUrl || null,
      published_at: published ? new Date().toISOString() : null,
    }).eq('id', id)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const youtubeId = extractYoutubeId(youtubeUrl)

  return (
    <div>
      <div className={styles.header}>
        <a href="/admin/blog" className={blogStyles.backLink}>← Retour aux articles</a>
        <h1 className={styles.title}>Éditer <em>l'article</em></h1>
      </div>

      <div className={blogStyles.editCard}>

        {/* Statut */}
        <div className={blogStyles.editRow}>
          <label className={blogStyles.editLabel}>Statut</label>
          <div className={blogStyles.statusRow}>
            <span className={`${blogStyles.badge} ${published ? blogStyles.badgePublished : blogStyles.badgeDraft}`}>
              {published ? 'Publié' : 'Brouillon'}
            </span>
            <button
              className={blogStyles.togglePublishBtn}
              onClick={() => setPublished(p => !p)}
            >
              {published ? 'Passer en brouillon' : 'Publier'}
            </button>
          </div>
        </div>

        {/* Titre */}
        <div className={blogStyles.editField}>
          <label className={blogStyles.editLabel}>Titre</label>
          <input
            className={blogStyles.input}
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Titre de l'article"
          />
        </div>

        {/* Extrait */}
        <div className={blogStyles.editField}>
          <label className={blogStyles.editLabel}>
            Extrait <span className={blogStyles.hint}>(affiché dans la liste)</span>
          </label>
          <textarea
            className={blogStyles.textarea}
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            placeholder="Courte description de l'article…"
            rows={2}
          />
        </div>

        {/* Image de couverture */}
        <div className={blogStyles.editField}>
          <label className={blogStyles.editLabel}>Image de couverture</label>
          {coverImage ? (
            <div className={blogStyles.coverPreview}>
              <Image
                src={coverImage}
                alt="Couverture"
                fill
                style={{ objectFit: 'cover' }}
                sizes="600px"
              />
              <button
                className={blogStyles.coverRemove}
                onClick={handleRemoveCover}
                title="Supprimer l'image"
              >
                ✕
              </button>
            </div>
          ) : (
            <div
              className={blogStyles.coverUpload}
              onClick={() => fileInputRef.current?.click()}
            >
              <span className={blogStyles.coverUploadIcon}>⬆</span>
              <span>{uploading ? 'Envoi en cours…' : 'Cliquer pour ajouter une image'}</span>
              <span className={blogStyles.hint}>JPG, PNG, WebP — max 5 Mo</span>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleCoverUpload}
          />
        </div>

        {/* Vidéo YouTube */}
        <div className={blogStyles.editField}>
          <label className={blogStyles.editLabel}>
            Vidéo YouTube <span className={blogStyles.hint}>(optionnel)</span>
          </label>
          <input
            className={blogStyles.input}
            type="text"
            value={youtubeUrl}
            onChange={e => setYoutubeUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=…"
          />
          {youtubeId && (
            <div className={blogStyles.youtubePreview}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="Aperçu vidéo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className={blogStyles.editField}>
          <label className={blogStyles.editLabel}>Contenu</label>
          <textarea
            className={`${blogStyles.textarea} ${blogStyles.textareaLarge}`}
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder={`Rédigez votre article ici…\n\nMarkdown supporté :\n# Titre\n## Sous-titre\n**Gras** *Italique*\n- Liste`}
            rows={20}
          />
          <p className={blogStyles.hint}>Supporte le Markdown — titres, gras, italique, listes</p>
        </div>

        <button
          className={blogStyles.saveBtn}
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Enregistrement…' : saved ? '✓ Enregistré !' : 'Enregistrer'}
        </button>
      </div>
    </div>
  )
}