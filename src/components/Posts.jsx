import { useState, useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Posts.css'

export default function Posts() {
    const { t, lang } = useLang()
    const ref = useRef(null)

    // User-created posts stored in localStorage
    const [userPosts, setUserPosts] = useState(() => {
        try {
            const saved = localStorage.getItem('portfolio_user_posts')
            return saved ? JSON.parse(saved) : []
        } catch {
            return []
        }
    })

    // Likes stored in localStorage
    const [likes, setLikes] = useState(() => {
        try {
            const saved = localStorage.getItem('portfolio_post_likes')
            return saved ? JSON.parse(saved) : {}
        } catch {
            return {}
        }
    })

    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [activePost, setActivePost] = useState(null)
    const [toastMessage, setToastMessage] = useState('')

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        tags: '',
        summary: '',
        content: '',
    })

    // Combine user posts with default localized posts
    const defaultPosts = t.posts.defaultPosts || []
    const allPosts = [...userPosts, ...defaultPosts]

    // Reset active category when language changes to 'All'
    useEffect(() => {
        setActiveCategory('All')
    }, [lang])

    // IntersectionObserver for reveal effects
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.1 }
        )
        ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [allPosts.length, activeCategory, searchQuery])

    // Close modals on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsCreateOpen(false)
                setActivePost(null)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const showToast = (msg) => {
        setToastMessage(msg)
        setTimeout(() => setToastMessage(''), 3500)
    }

    const handleLike = (postId, e) => {
        e?.stopPropagation()
        setLikes(prev => {
            const updated = { ...prev, [postId]: (prev[postId] || 0) + 1 }
            localStorage.setItem('portfolio_post_likes', JSON.stringify(updated))
            return updated
        })
    }

    const handleDeletePost = (postId, e) => {
        e?.stopPropagation()
        if (window.confirm(t.posts.deleteConfirm)) {
            setUserPosts(prev => {
                const updated = prev.filter(p => p.id !== postId)
                localStorage.setItem('portfolio_user_posts', JSON.stringify(updated))
                return updated
            })
            if (activePost?.id === postId) {
                setActivePost(null)
            }
            showToast(lang === 'ar' ? 'تم حذف المنشور بنجاح' : 'Post deleted successfully')
        }
    }

    const handleCreatePost = (e) => {
        e.preventDefault()
        if (!formData.title.trim() || !formData.summary.trim() || !formData.content.trim()) {
            return
        }

        const wordsCount = formData.content.trim().split(/\s+/).length
        const estimatedMinutes = Math.max(1, Math.ceil(wordsCount / 150))
        const readTimeStr = `${estimatedMinutes} ${t.posts.readTime}`

        const now = new Date()
        const dateStr = now.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
            month: 'short',
            year: 'numeric'
        })

        const categoryVal = formData.category || (t.posts.categories && t.posts.categories[0]) || 'Machine Learning'

        const newPost = {
            id: 'user-post-' + Date.now(),
            title: formData.title.trim(),
            category: categoryVal,
            date: dateStr,
            readTime: readTimeStr,
            tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : ['Tech'],
            summary: formData.summary.trim(),
            content: formData.content.trim(),
            isUserPost: true,
        }

        const updated = [newPost, ...userPosts]
        setUserPosts(updated)
        localStorage.setItem('portfolio_user_posts', JSON.stringify(updated))

        setFormData({
            title: '',
            category: '',
            tags: '',
            summary: '',
            content: '',
        })
        setIsCreateOpen(false)
        showToast(lang === 'ar' ? 'تم نشر منشورك بنجاح! 🚀' : 'Your post has been published! 🚀')
    }

    const handleShare = (post) => {
        navigator.clipboard?.writeText(window.location.origin + '#blog')
        showToast(t.posts.copiedToast)
    }

    // Categories list: 'All' + localized categories
    const categories = ['All', ...(t.posts.categories || [])]

    // Filtering
    const filteredPosts = allPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory
        const q = searchQuery.toLowerCase().trim()
        const matchesSearch = !q ||
            post.title.toLowerCase().includes(q) ||
            post.summary.toLowerCase().includes(q) ||
            post.content?.toLowerCase().includes(q) ||
            post.tags?.some(tag => tag.toLowerCase().includes(q))
        return matchesCategory && matchesSearch
    })

    return (
        <section id="blog" className="section posts" ref={ref}>
            <div className="container">
                <p className="section-label reveal">{t.posts.label}</p>
                <h2 className="section-title reveal">
                    {t.posts.title1}<span className="gold-text">{t.posts.title2}</span>
                </h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">{t.posts.subtitle}</p>

                {/* ── Controls Bar: Search & Create Post Button ── */}
                <div className="posts__controls reveal">
                    <div className="posts__search-wrap">
                        <span className="posts__search-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="posts__search-input"
                            placeholder={t.posts.searchPlaceholder}
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <button
                        className="btn btn-gold posts__create-btn"
                        onClick={() => setIsCreateOpen(true)}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        {t.posts.createBtn}
                    </button>
                </div>

                {/* ── Category Filter Pills ── */}
                <div className="posts__categories reveal">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`posts__cat-pill ${activeCategory === cat ? 'posts__cat-pill--active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat === 'All' ? t.posts.filterAll : cat}
                        </button>
                    ))}
                </div>

                {/* ── Posts Grid ── */}
                <div className="posts__grid reveal-stagger">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => {
                            const postLikes = likes[post.id] || 0
                            return (
                                <article
                                    key={post.id}
                                    className="post-card glass-card"
                                    style={{ transitionDelay: `${(index % 6) * 0.08}s` }}
                                >
                                    <div>
                                        <div className="post-card__header">
                                            <div className="post-card__meta-left">
                                                <span className="post-card__cat">{post.category}</span>
                                                {post.isUserPost && (
                                                    <span className="post-card__user-badge">{t.posts.yourPostBadge}</span>
                                                )}
                                            </div>
                                            <span className="post-card__read-time">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3
                                            className="post-card__title"
                                            onClick={() => setActivePost(post)}
                                        >
                                            {post.title}
                                        </h3>

                                        <p className="post-card__summary">{post.summary}</p>
                                    </div>

                                    <div>
                                        <div className="post-card__tags">
                                            {post.tags?.map(tag => (
                                                <span key={tag} className="post-card__tag">#{tag}</span>
                                            ))}
                                        </div>

                                        <div className="post-card__footer">
                                            <button
                                                className="post-card__read-btn"
                                                onClick={() => setActivePost(post)}
                                            >
                                                {t.posts.readFull}
                                                <span style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>
                                                    →
                                                </span>
                                            </button>

                                            <div className="post-card__actions">
                                                <button
                                                    className={`post-card__like-btn ${postLikes > 0 ? 'post-card__like-btn--liked' : ''}`}
                                                    onClick={(e) => handleLike(post.id, e)}
                                                    title={t.posts.likes}
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill={postLikes > 0 ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                    </svg>
                                                    {postLikes}
                                                </button>

                                                {post.isUserPost && (
                                                    <button
                                                        className="post-card__delete-btn"
                                                        onClick={(e) => handleDeletePost(post.id, e)}
                                                        title={t.posts.deleteBtn}
                                                    >
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    ) : (
                        <div className="posts__empty glass-card">
                            <div className="posts__empty-icon">📝</div>
                            <p>{t.posts.noPosts}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Modal: Create Post ── */}
            {isCreateOpen && (
                <div
                    className="posts-modal-backdrop"
                    onClick={() => setIsCreateOpen(false)}
                >
                    <div
                        className="posts-modal"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="posts-modal__close"
                            onClick={() => setIsCreateOpen(false)}
                            aria-label={t.posts.closeModal}
                        >
                            ✕
                        </button>

                        <h3 className="posts-modal__title">{t.posts.modalCreateTitle}</h3>
                        <p className="posts-modal__desc">{t.posts.modalCreateDesc}</p>

                        <form className="posts-form" onSubmit={handleCreatePost}>
                            <div className="posts-form__group">
                                <label className="posts-form__label">{t.posts.inputTitle}</label>
                                <input
                                    type="text"
                                    required
                                    className="posts-form__input"
                                    placeholder={t.posts.inputTitlePlaceholder}
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>

                            <div className="posts-form__row">
                                <div className="posts-form__group">
                                    <label className="posts-form__label">{t.posts.inputCategory}</label>
                                    <select
                                        className="posts-form__select"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        {(t.posts.categories || []).map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="posts-form__group">
                                    <label className="posts-form__label">{t.posts.inputTags}</label>
                                    <input
                                        type="text"
                                        className="posts-form__input"
                                        placeholder={t.posts.inputTagsPlaceholder}
                                        value={formData.tags}
                                        onChange={e => setFormData({ ...formData, tags: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="posts-form__group">
                                <label className="posts-form__label">{t.posts.inputSummary}</label>
                                <input
                                    type="text"
                                    required
                                    className="posts-form__input"
                                    placeholder={t.posts.inputSummaryPlaceholder}
                                    value={formData.summary}
                                    onChange={e => setFormData({ ...formData, summary: e.target.value })}
                                />
                            </div>

                            <div className="posts-form__group">
                                <label className="posts-form__label">{t.posts.inputContent}</label>
                                <textarea
                                    required
                                    rows="6"
                                    className="posts-form__textarea"
                                    placeholder={t.posts.inputContentPlaceholder}
                                    value={formData.content}
                                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                                />
                            </div>

                            <div className="posts-form__actions">
                                <button
                                    type="button"
                                    className="btn btn-outline"
                                    onClick={() => setIsCreateOpen(false)}
                                >
                                    {t.posts.cancel}
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-gold"
                                >
                                    {t.posts.submitPublish}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ── Modal: Post Reader ── */}
            {activePost && (
                <div
                    className="posts-modal-backdrop"
                    onClick={() => setActivePost(null)}
                >
                    <div
                        className="posts-modal posts-modal--reader"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="posts-modal__close"
                            onClick={() => setActivePost(null)}
                            aria-label={t.posts.closeModal}
                        >
                            ✕
                        </button>

                        <div className="posts-reader__meta">
                            <span className="post-card__cat">{activePost.category}</span>
                            <span className="post-card__read-time">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                {activePost.readTime}
                            </span>
                            <span className="posts-reader__author-date">
                                {t.posts.publishedOn} {activePost.date}
                            </span>
                        </div>

                        <h2 className="posts-reader__title">{activePost.title}</h2>

                        {/* Author info */}
                        <div className="posts-reader__author-box">
                            <img
                                src="/images/photo_2026-01-19_13-41-42.jpg"
                                alt="Ahmed Ali Ashour"
                                className="posts-reader__avatar"
                            />
                            <div>
                                <div className="posts-reader__author-name">{t.posts.author}</div>
                                <div className="posts-reader__author-date">Data Scientist · ML Engineer</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="posts-reader__body">
                            {activePost.content || activePost.summary}
                        </div>

                        {/* Tags */}
                        <div className="post-card__tags" style={{ marginBottom: '20px' }}>
                            {activePost.tags?.map(tag => (
                                <span key={tag} className="post-card__tag">#{tag}</span>
                            ))}
                        </div>

                        {/* Reader Footer Actions */}
                        <div className="posts-reader__footer">
                            <div className="post-card__actions">
                                <button
                                    className={`post-card__like-btn ${(likes[activePost.id] || 0) > 0 ? 'post-card__like-btn--liked' : ''}`}
                                    onClick={(e) => handleLike(activePost.id, e)}
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill={(likes[activePost.id] || 0) > 0 ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                    {likes[activePost.id] || 0} {t.posts.likes}
                                </button>

                                <button
                                    className="btn btn-outline"
                                    style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                                    onClick={() => handleShare(activePost)}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="18" cy="5" r="3"></circle>
                                        <circle cx="6" cy="12" r="3"></circle>
                                        <circle cx="18" cy="19" r="3"></circle>
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                    </svg>
                                    {t.posts.shareTooltip}
                                </button>
                            </div>

                            <button
                                className="btn btn-outline"
                                onClick={() => setActivePost(null)}
                            >
                                {t.posts.closeModal}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Floating Toast ── */}
            {toastMessage && (
                <div className="posts-toast">
                    <span>✨</span>
                    <span>{toastMessage}</span>
                </div>
            )}
        </section>
    )
}
