import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Navbar.css'

function getInitialTheme() {
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
}

export default function Navbar() {
    const { lang, toggleLang, t } = useLang()

    const navLinks = [
        { label: t.nav.home, href: '#hero' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.skills, href: '#skills' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.blog, href: '#blog' },
        { label: t.nav.certificates, href: '#certificates' },
        { label: t.nav.contact, href: '#contact' },
    ]

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('#hero')
    const [theme, setTheme] = useState(() => {
        const t = getInitialTheme()
        applyTheme(t)
        return t
    })

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 30)

            const sections = navLinks.map(l => l.href.replace('#', ''))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive('#' + sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleLink = (href) => {
        setMenuOpen(false)
        setActive(href)
    }

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        applyTheme(next)
    }

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <a href="#hero" className="navbar__logo">
                    <span className="gold-text">{lang === 'ar' ? 'أحمد' : 'Ahmed'}</span>
                    <span className="navbar__logo-dot">.</span>
                </a>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`navbar__link ${active === link.href ? 'navbar__link--active' : ''}`}
                                onClick={() => handleLink(link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="btn btn-gold navbar__cta" onClick={() => handleLink('#contact')}>
                            {t.nav.hireme}
                        </a>
                    </li>
                </ul>

                {/* Language Toggle */}
                <button
                    className="navbar__lang-toggle"
                    onClick={toggleLang}
                    aria-label={`Switch to ${lang === 'en' ? 'Arabic' : 'English'}`}
                    title={`Switch to ${lang === 'en' ? 'العربية' : 'English'}`}
                >
                    <svg className="navbar__lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
                    </svg>
                    <span className="navbar__lang-label">{lang === 'en' ? 'ع' : 'EN'}</span>
                </button>

                <button
                    className="navbar__theme-toggle"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>

                <button
                    className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    )
}
