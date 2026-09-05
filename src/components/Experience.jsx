import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Experience.css'

export default function Experience() {
    const { t } = useLang()
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.1 }
        )
        ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section id="experience" className="section experience" ref={ref}>
            <div className="container">
                <p className="section-label reveal">{t.experience.label}</p>
                <h2 className="section-title reveal">
                    {t.experience.title1}<span className="gold-text">{t.experience.title2}</span>
                </h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">{t.experience.subtitle}</p>

                <div className="timeline">
                    {t.experience.items.map((item, i) => (
                        <div
                            key={i}
                            className={`timeline__item reveal-stagger ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
                            style={{ transitionDelay: `${i * 0.12}s` }}
                        >
                            <div className="timeline__dot">
                                <span className="timeline__dot-icon">{item.icon}</span>
                            </div>
                            <div className="timeline__card glass-card">
                                <div className="timeline__card-header">
                                    <span className="timeline__badge">{item.type}</span>
                                    <span className="timeline__date">{item.date}</span>
                                </div>
                                <h3 className="timeline__title">{item.role}</h3>
                                <p className="timeline__org">{item.org}</p>
                                <ul className="timeline__duties">
                                    {item.duties.map((d, j) => (
                                        <li key={j}>{d}</li>
                                    ))}
                                </ul>
                                <div className="timeline__tags">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="timeline__tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
