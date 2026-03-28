import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useVisible } from '../hooks/useVisible'
import './Home.css'

export default function Home() {
  const { t } = useLanguage()
  const [refHero, heroVisible] = useVisible(0.2)
  const [refIntro, introVisible] = useVisible(0.15)
  const [refMood, moodVisible] = useVisible(0.15)
  const introWords = t('home.intro').split(' ')

  return (
    <>
      <section ref={refHero} className={`hero ${heroVisible ? 'visible' : ''}`}>
        <div className="hero__bg" />
        <div className="hero__stripe" aria-hidden="true" />
        <div className="hero__grid">
          <div className="hero__side">
            <span className="hero__eyebrow">{t('home.est')}</span>
            <span className="hero__side-line" aria-hidden="true" />
          </div>
          <div className="hero__mark">
            <div className="hero__logo-wrap">
              <img
                src="/images/whiteelogo.png"
                alt="Vertè"
                className="hero__logo"
              />
            </div>
            <p className="hero__tagline">
              {'Verte Pristine'.split('').map((ch, i) => (
                <span key={i} className="hero__tagline-char" style={{ animationDelay: `${0.55 + i * 0.035}s` }}>
                  {ch === ' ' ? '\u00a0' : ch}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section ref={refIntro} className={`intro ${introVisible ? 'visible' : ''}`}>
        <div className="intro__grid">
          <div className="intro__head">
            <h2 className="intro__title" aria-label={t('home.welcome')}>
              {t('home.welcome').split('').map((ch, i) => (
                <span
                  key={i}
                  className="intro__char"
                  style={{ animationDelay: `${0.05 + i * 0.055}s` }}
                >
                  {ch}
                </span>
              ))}
            </h2>
            <div className={`intro__accent ${introVisible ? 'visible' : ''}`} aria-hidden="true" />
          </div>
          <p className="intro__text">
            {introWords.map((word, i) => (
              <span
                key={i}
                className="intro__word"
                style={{ animationDelay: `${0.35 + i * 0.035}s` }}
              >
                {word}
                {i < introWords.length - 1 ? '\u00a0' : ''}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section ref={refMood} className={`mood ${moodVisible ? 'visible' : ''}`}>
        <div className="mood__label">{t('home.atmosphere')}</div>
        <ul className="mood__stack">
          <li className="mood__row">
            <span className="mood__index">01</span>
            <span className="mood__word">{t('home.mood1')}</span>
          </li>
          <li className="mood__row">
            <span className="mood__index">02</span>
            <span className="mood__word">{t('home.mood2')}</span>
          </li>
          <li className="mood__row">
            <span className="mood__index">03</span>
            <span className="mood__word">{t('home.mood3')}</span>
          </li>
        </ul>
      </section>

      <section className="cta">
        <Link to="/contact" className="cta__link">
          <span className="cta__link-text">{t('home.cta')}</span>
          <span className="cta__link-arrow" aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  )
}
