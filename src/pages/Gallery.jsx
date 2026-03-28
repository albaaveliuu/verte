import { useMemo } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useVisible } from '../hooks/useVisible'
import './Gallery.css'

const galleryModules = import.meta.glob('../galleryimages/*.{png,jpg,jpeg,webp}', {
  eager: true,
})

const gallerySources = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod.default)

export default function Gallery() {
  const { t } = useLanguage()
  const [refTitle, titleVisible] = useVisible(0.2)
  const [refGrid, gridVisible] = useVisible(0.1)

  const galleryImages = useMemo(
    () => gallerySources.map((src, index) => ({ src, index })),
    [],
  )

  return (
    <div className="gallery-page">
      <section ref={refTitle} className={`gallery-header ${titleVisible ? 'visible' : ''}`}>
        <h1 className="gallery-header__title">{t('gallery.title')}</h1>
        <div className={`section-line ${titleVisible ? 'visible' : ''}`} />
        <p className="gallery-header__sub">{t('gallery.sub')}</p>
      </section>

      <section ref={refGrid} className={`gallery-grid ${gridVisible ? 'visible' : ''}`}>
        {galleryImages.map(({ src, index }, i) => (
          <div
            key={src}
            className="gallery-item"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="gallery-item__frame">
              <img
                className="gallery-item__img"
                src={src}
                alt={t('gallery.photoAlt', { n: index + 1 })}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
