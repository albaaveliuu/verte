import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { translations } from './translations'

const STORAGE_KEY = 'verte-locale'

const LanguageContext = createContext(null)

function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj)
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'sq') return stored
    const nav = navigator.language?.toLowerCase() ?? ''
    if (nav.startsWith('sq') || nav.startsWith('al')) return 'sq'
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = locale === 'sq' ? 'sq' : 'en'
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const setLocale = useCallback((next) => {
    if (next === 'en' || next === 'sq') setLocaleState(next)
  }, [])

  const t = useCallback(
    (key, vars) => {
      let str = getByPath(translations[locale], key)
      if (str == null) str = getByPath(translations.en, key)
      if (typeof str === 'function') return str(vars)
      if (typeof str !== 'string') return key
      if (vars) {
        return str.replace(/\{\{(\w+)\}\}/g, (_, name) =>
          vars[name] != null ? String(vars[name]) : '',
        )
      }
      return str
    },
    [locale],
  )

  useEffect(() => {
    document.title = t('meta.title')
  }, [locale, t])

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
