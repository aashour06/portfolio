import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Skills.css'

const tools = [
    { name: 'Pandas' },
    { name: 'NumPy' },
    { name: 'Hugging Face' },
    { name: 'Azure AI' },
    { name: 'MLflow' },
    { name: 'Git / GitHub' },
    { name: 'Jupyter' },
    { name: 'Matplotlib' },
    { name: 'Seaborn' },
    { name: 'OOP (Python)' },
]

export default function Skills() {
    const { t, lang } = useLang()
    const ref = useRef(null)
    const skills = t.skills.items

    // Initial intersection observer — runs once on mount
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible')
                        e.target.querySelectorAll('.skill-bar__fill').forEach(bar => {
                            bar.style.width = bar.dataset.level + '%'
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )
        ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger').forEach(el => observer.observe(el))
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    // Re-animate bars when language switches and section is already visible
    useEffect(() => {
        if (!ref.current) return
        const section = ref.current
        // Reset bars to 0 then re-animate so the transition fires again
        section.querySelectorAll('.skill-bar__fill').forEach(bar => {
            bar.style.width = '0%'
        })
        const raf = requestAnimationFrame(() => {
            section.querySelectorAll('.skill-bar__fill').forEach(bar => {
                bar.style.width = bar.dataset.level + '%'
            })
        })
        return () => cancelAnimationFrame(raf)
    }, [skills])

    return (
        <section id="skills" className="section skills" ref={ref}>
            <div className="container">
                <p className="section-label reveal">{t.skills.label}</p>
                <h2 className="section-title reveal">
                    {t.skills.title1}<span className="gold-text">{t.skills.title2}</span>
                </h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">
                    {t.skills.subtitle}
                </p>

                <div className="skills__grid reveal-stagger">
                    {skills.map((s, i) => (
                        <div key={`${lang}-${s.name}`} className="skill-item glass-card" style={{ transitionDelay: `${i * 0.06}s` }}>
                            <div className="skill-item__header">
                                <span className="skill-item__icon">{s.icon}</span>
                                <span className="skill-item__name">{s.name}</span>
                                <span className="skill-item__pct gold-text">{s.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar__fill"
                                    data-level={s.level}
                                    style={{ width: '0%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="skills__tools-title reveal">{t.skills.toolsTitle}</h3>
                <div className="skills__tools reveal-stagger">
                    {tools.map(tool => (
                        <span key={tool.name} className="skills__tool glass-card">{tool.name}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
