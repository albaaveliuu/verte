import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/menu', label: t('nav.menu') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar__logo" aria-label={t('nav.homeAria')}>
        <img src="/images/Verte_Logo-03.png" alt="Vertè" />
      </Link>
      <button
        type="button"
        className="navbar__toggle"
        aria-label={t('nav.toggleMenu')}
        onClick={() => setOpen(!open)}
      >
        <span className={open ? 'open' : ''} />
        <span className={open ? 'open' : ''} />
        <span className={open ? 'open' : ''} />
      </button>
      <nav className={`navbar__nav ${open ? 'open' : ''}`}>
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`navbar__link line-underline ${location.pathname === path ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <div className="navbar__lang" role="group" aria-label={t('nav.langGroup')}>
          <button
            type="button"
            className={`navbar__lang-btn ${locale === 'en' ? 'is-active' : ''}`}
            onClick={() => setLocale('en')}
            lang="en"
          >
            EN
          </button>
          <span className="navbar__lang-sep" aria-hidden="true">
            |
          </span>
          <button
            type="button"
            className={`navbar__lang-btn ${locale === 'sq' ? 'is-active' : ''}`}
            onClick={() => setLocale('sq')}
            lang="sq"
          >
            AL
          </button>
        </div>
      </nav>
    </header>
  )
}
