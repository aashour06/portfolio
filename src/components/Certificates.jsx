import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LanguageContext'
import './Certificates.css'

export default function Certificates() {
    const { t } = useLang()
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.1 }
        )
        ref.current?.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section id="certificates" className="section certificates" ref={ref}>
            <div className="container">
                <p className="section-label reveal">{t.certificates.label}</p>
                <h2 className="section-title reveal">
                    {t.certificates.title1}<span className="gold-text">{t.certificates.title2}</span>
                </h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">{t.certificates.subtitle}</p>

                <div className="certs__grid reveal-stagger">
                    {t.certificates.items.map((cert, i) => (
                        <div
                            key={i}
                            className="cert-card glass-card"
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <div className="cert-card__icon-wrap">
                                <span className="cert-card__icon">{cert.icon}</span>
                            </div>
                            <div className="cert-card__body">
                                <span className="cert-card__issuer">{cert.issuer}</span>
                                <h3 className="cert-card__title">{cert.title}</h3>
                                {cert.url && cert.url !== '#' ? (
                                    <a href={cert.url} target="_blank" rel="noreferrer" className="cert-card__link">
                                        {t.certificates.viewCert} →
                                    </a>
                                ) : (
                                    <span className="cert-card__link cert-card__link--pending">{t.certificates.pending}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
