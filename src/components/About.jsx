import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './About.css'

export default function About() {
    const { t } = useLang()
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.15 }
        )
        ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section id="about" className="section about" ref={ref}>
            <div className="container">
                <p className="section-label reveal">{t.about.label}</p>
                <h2 className="section-title reveal">
                    {t.about.title1}<span className="gold-text">{t.about.title2}</span>
                </h2>
                <div className="divider reveal" />

                <div className="about__grid">
                    {/* ── Photo ── */}
                    <div className="about__avatar-wrap reveal">
                        <div className="about__avatar">
                            <div className="about__avatar-ring about__avatar-ring--1" />
                            <div className="about__avatar-ring about__avatar-ring--2" />
                            <div className="about__avatar-inner">
                                <div className="about__initials">
                                    <img
                                        src="/images/photo_2026-01-19_13-41-42.jpg"
                                        alt="Ahmed Ali Ashour"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about__text reveal">
                        <h3 className="about__greeting" style={{ textAlign: 'center' }}>
                            {t.about.greeting1}<span className="gold-text">{t.about.greeting2}</span>{t.about.greetingEmoji}
                        </h3>

                        <div className="about__tags" style={{ marginBottom: '24px' }}>
                            {['Python', 'Scikit-learn', 'MLflow', 'SQL', 'Hugging Face'].map(tag => (
                                <span key={tag} className="about__tag">{tag}</span>
                            ))}
                        </div>

                        <p className="about__para" dangerouslySetInnerHTML={{ __html: t.about.para1 }} />
                        <p className="about__para" dangerouslySetInnerHTML={{ __html: t.about.para2 }} />
                        <p className="about__para" dangerouslySetInnerHTML={{ __html: t.about.para3 }} />
                        <p className="about__para" dangerouslySetInnerHTML={{ __html: t.about.para4 }} />

                        <div className="about__facts">
                            {t.about.facts.map(f => (
                                <div key={f.label} className="about__fact glass-card">
                                    <span className="about__fact-icon">{f.icon}</span>
                                    <div>
                                        <span className="about__fact-label">{f.label}</span>
                                        <span className="about__fact-val">{f.val}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="about__actions" style={{ justifyContent: 'center' }}>
                            <a href="#contact" className="btn btn-gold">{t.about.connect}</a>
                            <a href="/Ahmed_Ali_Ashour_CV_ATS.pdf" download="Ahmed_Ali_Ashour_CV.pdf" className="btn btn-outline">{t.about.downloadCV}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
