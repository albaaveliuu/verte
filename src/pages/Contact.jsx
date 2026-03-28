import { useLanguage } from '../i18n/LanguageContext'
import { useVisible } from '../hooks/useVisible'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const [refTitle, titleVisible] = useVisible(0.2)
  const [refContent, contentVisible] = useVisible(0.15)

  return (
    <div className="contact-page">
      <section ref={refTitle} className={`contact-header ${titleVisible ? 'visible' : ''}`}>
        <h1 className="contact-header__title">{t('contact.title')}</h1>
        <div className={`section-line ${titleVisible ? 'visible' : ''}`} />
      </section>

      <section ref={refContent} className={`contact-content ${contentVisible ? 'visible' : ''}`}>
        <div className="contact-block">
          <div className={`contact-block__line line-expand ${contentVisible ? 'visible' : ''}`} />
          <h3 className="contact-block__label">{t('contact.addressLabel')}</h3>
          <p className="contact-block__text">
            Muharrem Fejza<br />
            Prishtine, Kosovo 10000
          </p>
        </div>
        <div className="contact-block">
          <div className={`contact-block__line line-expand ${contentVisible ? 'visible' : ''}`} />
          <h3 className="contact-block__label">{t('contact.hoursLabel')}</h3>
          <p className="contact-block__text">
            {t('contact.openEveryday')}
            <br />
            {t('contact.hoursTime')}
          </p>
        </div>
        <div className="contact-block">
          <div className={`contact-block__line line-expand ${contentVisible ? 'visible' : ''}`} />
          <h3 className="contact-block__label">{t('contact.emailLabel')}</h3>
          <p className="contact-block__text">
            <a href="mailto:vertepristine@gmail.com" className="contact-link line-underline">
              vertepristine@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
