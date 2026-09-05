import { useLang } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
    const { t } = useLang()
    const year = new Date().getFullYear()
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'blog', 'certificates', 'contact']

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <span className="gold-text footer__logo">Ahmed Ali Ashour</span>
                    <p className="footer__tagline">{t.footer.tagline}</p>
                </div>
                <div className="footer__links">
                    {t.footer.links.map((label, i) => (
                        <a key={label} href={`#${sections[i]}`} className="footer__link">{label}</a>
                    ))}
                </div>
                <p className="footer__copy">{t.footer.copyright.replace('{year}', year)}</p>
            </div>
        </footer>
    )
}
