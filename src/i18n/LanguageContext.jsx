import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import translations from './translations'

const LanguageContext = createContext()

function getInitialLang() {
  const stored = localStorage.getItem('lang')
  if (stored === 'ar' || stored === 'en') return stored
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  // Apply document-level RTL / LTR + Arabic font
  useEffect(() => {
    const html = document.documentElement
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl')
      html.setAttribute('lang', 'ar')
      document.body.classList.add('lang-ar')
    } else {
      html.setAttribute('dir', 'ltr')
      html.setAttribute('lang', 'en')
      document.body.classList.remove('lang-ar')
    }
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'))
  }, [])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
