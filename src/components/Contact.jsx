import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com/
// 2. Create an Email Service (Gmail, Outlook, etc.) → copy Service ID
// 3. Create an Email Template → copy Template ID
//    Template variables to use: {{from_name}}, {{from_email}}, {{message}}
// 4. Go to Account → API Keys → copy Public Key
// Then replace the three values below:
const EMAILJS_SERVICE_ID = 'service_5v7h9yf'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_crvcikv'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = '7Xfb-CU7ctjRWianV'   // e.g. 'abcDEFghiJKL'
// ─────────────────────────────────────────────────────────────────────────────

const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-ali-ashour/', icon: 'in' },
    { name: 'GitHub', href: 'https://github.com/aashour06', icon: 'gh' },
    { name: 'Kaggle', href: 'https://www.kaggle.com/ahmedaliashour', icon: 'k' },
    { name: 'Email', href: 'mailto:a7med3shour10@gmail.com', icon: '@' },
]

export default function Contact() {
    const { t } = useLang()
    const ref = useRef(null)
    const formRef = useRef(null)
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.1 }
        )
        ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()

        // Warn if EmailJS hasn't been configured yet
        if (
            EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
            EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
            EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
        ) {
            alert(
                '⚠️ EmailJS is not configured yet.\n\n' +
                'Open src/components/Contact.jsx and replace the three placeholder\n' +
                'values (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY) with your EmailJS credentials.\n\n' +
                'Sign up free at https://www.emailjs.com/'
            )
            return
        }

        setStatus('sending')
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY }
            )
            setStatus('sent')
            setForm({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 4000)
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    const btnLabel = {
        idle: t.contact.btnIdle,
        sending: t.contact.btnSending,
        sent: t.contact.btnSent,
        error: t.contact.btnError,
    }[status]

    return (
        <section id="contact" className="section contact" ref={ref}>
            <div className="hero__glow hero__glow--1"
                style={{ top: 'auto', bottom: '-200px', left: '50%', transform: 'translateX(-50%)' }} />
            <div className="container">
                <p className="section-label reveal">{t.contact.label}</p>
                <h2 className="section-title reveal">
                    {t.contact.title1}<span className="gold-text">{t.contact.title2}</span>
                </h2>
                <div className="divider reveal" />
                <p className="section-subtitle reveal">
                    {t.contact.subtitle}
                </p>

                <div className="contact__grid">
                    {/* ── Info card ── */}
                    <div className="contact__info reveal-left">
                        <div className="contact__card glass-card">
                            <h3 className="contact__card-title">{t.contact.cardTitle}</h3>
                            <p className="contact__card-text">
                                {t.contact.cardText}
                            </p>

                            <div className="contact__details">
                                {t.contact.details.map(d => (
                                    <div key={d.label} className="contact__detail">
                                        <span className="contact__detail-icon">{d.icon}</span>
                                        <div>
                                            <span className="contact__detail-label">{d.label}</span>
                                            {d.link
                                                ? <a href={d.link} target="_blank" rel="noreferrer" className="contact__detail-val contact__detail-link">{d.val}</a>
                                                : <span className="contact__detail-val">{d.val}</span>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="contact__socials">
                                {socials.map(s => (
                                    <a key={s.name} href={s.href} className="contact__social glass-card" aria-label={s.name}>
                                        <span className="contact__social-icon">{s.icon}</span>
                                        <span>{s.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Form ── */}
                    <div className="contact__form-wrap reveal-right">
                        <form className="contact__form glass-card" ref={formRef} onSubmit={handleSubmit}>
                            <h3 className="contact__form-title">{t.contact.formTitle}</h3>

                            <div className="form-group">
                                <label htmlFor="name">{t.contact.labelName}</label>
                                {/* name attr must match EmailJS template variable: {{from_name}} */}
                                <input
                                    id="name" type="text" name="from_name"
                                    placeholder={t.contact.placeholderName}
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t.contact.labelEmail}</label>
                                {/* name attr must match EmailJS template variable: {{from_email}} */}
                                <input
                                    id="email" type="email" name="from_email"
                                    placeholder={t.contact.placeholderEmail}
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t.contact.labelMessage}</label>
                                {/* name attr must match EmailJS template variable: {{message}} */}
                                <textarea
                                    id="message" name="message" rows="5"
                                    placeholder={t.contact.placeholderMessage}
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`btn btn-gold contact__submit ${status}`}
                            >
                                {btnLabel}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
