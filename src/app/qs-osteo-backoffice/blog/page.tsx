'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import styles from '../dashboard.module.css'
import blogStyles from './blog.module.css'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  published: boolean
  published_at: string
  created_at: string
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => { fetchPosts() }, [])

  async function fetchPosts() {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    setPosts(data ?? [])
    setLoading(false)
  }

  function slugify(str: string) {
    return str
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  async function handleCreate() {
    if (!newTitle.trim()) return
    setCreating(true)
    const slug = slugify(newTitle)
    const { data } = await supabase
      .from('posts')
      .insert({ title: newTitle, slug, excerpt: '', content: '', published: false })
      .select()
      .single()
    setCreating(false)
    setNewTitle('')
    if (data) {
      window.location.href = `/qs-osteo-backoffice/blog/${data.id}`
    }
  }

  async function togglePublish(post: Post) {
    await supabase.from('posts').update({ published: !post.published }).eq('id', post.id)
    fetchPosts()
  }

  async function handleDelete(id: string) {
    if (!confirm('Supprimer cet article ?')) return
    await supabase.from('posts').delete().eq('id', id)
    fetchPosts()
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Blog <em>&amp; Articles</em></h1>
        <p className={styles.subtitle}>Publiez des articles pour améliorer votre référencement Google local.</p>
      </div>

      {/* Créer un article */}
      <div className={blogStyles.createCard}>
        <h2 className={blogStyles.createTitle}>Nouvel article</h2>
        <div className={blogStyles.createRow}>
          <input
            className={blogStyles.input}
            type="text"
            placeholder="Titre de l'article…"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCreate()}
          />
          <button
            className={blogStyles.createBtn}
            onClick={handleCreate}
            disabled={creating || !newTitle.trim()}
          >
            {creating ? '…' : '+ Créer'}
          </button>
        </div>
      </div>

      {/* Liste des articles */}
      {loading ? (
        <p className={blogStyles.empty}>Chargement…</p>
      ) : posts.length === 0 ? (
        <p className={blogStyles.empty}>Aucun article pour l'instant.</p>
      ) : (
        <div className={blogStyles.list}>
          {posts.map(post => (
            <div key={post.id} className={blogStyles.postRow}>
              <div className={blogStyles.postInfo}>
                <span className={`${blogStyles.badge} ${post.published ? blogStyles.badgePublished : blogStyles.badgeDraft}`}>
                  {post.published ? 'Publié' : 'Brouillon'}
                </span>
                <h3 className={blogStyles.postTitle}>{post.title}</h3>
                <p className={blogStyles.postMeta}>
                  /{post.slug} · {new Date(post.created_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <div className={blogStyles.postActions}>
                <button
                  className={blogStyles.actionBtn}
                  onClick={() => togglePublish(post)}
                >
                  {post.published ? 'Dépublier' : 'Publier'}
                </button>
                <a
                  href={`/qs-osteo-backoffice/blog/${post.id}`}
                  className={blogStyles.actionBtn}
                >
                  Éditer
                </a>
                <button
                  className={`${blogStyles.actionBtn} ${blogStyles.actionDelete}`}
                  onClick={() => handleDelete(post.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
