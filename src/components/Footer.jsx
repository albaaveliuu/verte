import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="footer__line" />
      <div className="footer__inner">
        <Link to="/" className="footer__logo" aria-label={t('footer.homeAria')}>
          <img src="/images/whitebg.png" alt="Vertè" />
        </Link>
        <div className="footer__details">
          <p className="footer__address">
            Muharrem Fejza<br />
            Prishtine, Kosovo 10000
          </p>
          <a href="mailto:vertepristine@gmail.com" className="footer__email line-underline">
            vertepristine@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
