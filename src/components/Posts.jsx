import { useState, useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Posts.css'

export default function Posts() {
    const { t, lang } = useLang()
    const ref = useRef(null)

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
    const [activePost, setActivePost] = useState(null)
    const [toastMessage, setToastMessage] = useState('')

    // Default localized posts
    const allPosts = t.posts.defaultPosts || []

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

                {/* ── Controls Bar: Search ── */}
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
