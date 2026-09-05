import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Hero.css'

export default function Hero() {
    const { t } = useLang()
    const roleRef = useRef(null)
    const roles = t.hero.roles

    useEffect(() => {
        let idx = 0, charIdx = 0, deleting = false
        let timeoutId
        const tick = () => {
            if (!roleRef.current) return
            const current = roles[idx]
            if (!deleting) {
                roleRef.current.textContent = current.slice(0, ++charIdx)
                if (charIdx === current.length) {
                    deleting = true
                    timeoutId = setTimeout(tick, 2000)
                    return
                }
            } else {
                roleRef.current.textContent = current.slice(0, --charIdx)
                if (charIdx === 0) {
                    deleting = false
                    idx = (idx + 1) % roles.length
                }
            }
            timeoutId = setTimeout(tick, deleting ? 60 : 100)
        }
        timeoutId = setTimeout(tick, 600)
        return () => clearTimeout(timeoutId)
    }, [roles])

    // Track mouse for button ripple effect
    const handleMouseMove = (e) => {
        const btns = e.currentTarget.querySelectorAll('.btn')
        btns.forEach(btn => {
            const rect = btn.getBoundingClientRect()
            btn.style.setProperty('--x', `${e.clientX - rect.left}px`)
            btn.style.setProperty('--y', `${e.clientY - rect.top}px`)
        })
    }

    return (
        <section id="hero" className="hero" onMouseMove={handleMouseMove}>
            <div className="bg-grid" />
            <div className="hero__glow hero__glow--1" />
            <div className="hero__glow hero__glow--2" />

            {/* Floating decorative shapes */}
            <div className="hero__shape hero__shape--1" />
            <div className="hero__shape hero__shape--2" />
            <div className="hero__shape hero__shape--3" />

            <div className="container hero__content">
                <div className="hero__badge fade-up">
                    <span className="hero__badge-dot" />
                    {t.hero.badge}
                </div>

                <h1 className="hero__name fade-up" style={{ animationDelay: '0.15s' }}>
                    {t.hero.name1}<br />
                    <span className="gold-text">{t.hero.name2}</span>
                </h1>

                <div className="hero__role-wrap fade-up" style={{ animationDelay: '0.3s' }}>
                    <span className="hero__role-prefix">{t.hero.rolePrefix}</span>
                    <span className="hero__role" ref={roleRef} />
                    <span className="hero__cursor">|</span>
                </div>

                <p className="hero__bio fade-up" style={{ animationDelay: '0.45s' }}>
                    {t.hero.bio}
                </p>

                <div className="hero__actions fade-up" style={{ animationDelay: '0.6s' }}>
                    <a href="#projects" className="btn btn-gold">{t.hero.viewWork}</a>
                    <a href="#contact" className="btn btn-outline">{t.hero.getInTouch}</a>
                </div>

                
            </div>

            <a href="#about" className="hero__scroll-indicator">
                <div className="hero__mouse">
                    <div className="hero__wheel" />
                </div>
                <span>{t.hero.scroll}</span>
            </a>
        </section>
    )
}
