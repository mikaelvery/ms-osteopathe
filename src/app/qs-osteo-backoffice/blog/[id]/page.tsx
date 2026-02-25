'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useParams } from 'next/navigation'
import styles from '../../dashboard.module.css'
import blogStyles from '../blog.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function EditPost() {
  const { id } = useParams<{ id: string }>()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    supabase.from('posts').select('*').eq('id', id).single().then(({ data }) => {
      if (data) {
        setTitle(data.title)
        setExcerpt(data.excerpt)
        setContent(data.content)
        setPublished(data.published)
      }
    })
  }, [id])

  async function handleSave() {
    setSaving(true)
    await supabase.from('posts').update({ title, excerpt, content, published }).eq('id', id)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <div className={styles.header}>
        <a href="/qs-osteo-backoffice/blog" className={blogStyles.backLink}>← Retour aux articles</a>
        <h1 className={styles.title}>Éditer <em>l'article</em></h1>
      </div>

      <div className={blogStyles.editCard}>

        {/* Publié toggle */}
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
          <label className={blogStyles.editLabel}>Extrait <span className={blogStyles.hint}>(affiché dans la liste)</span></label>
          <textarea
            className={blogStyles.textarea}
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            placeholder="Courte description de l'article…"
            rows={2}
          />
        </div>

        {/* Contenu */}
        <div className={blogStyles.editField}>
          <label className={blogStyles.editLabel}>Contenu</label>
          <textarea
            className={`${blogStyles.textarea} ${blogStyles.textareaLarge}`}
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Rédigez votre article ici…&#10;&#10;Vous pouvez utiliser du Markdown :&#10;# Titre&#10;## Sous-titre&#10;**Gras** *Italique*&#10;- Liste"
            rows={20}
          />
          <p className={blogStyles.hint}>Supporte le Markdown basique</p>
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
