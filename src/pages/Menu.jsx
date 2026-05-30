import { useLanguage } from '../i18n/LanguageContext'
import { useVisible } from '../hooks/useVisible'
import './Menu.css'

/** From SAMPLEE02.pdf — verbatim dish names, ingredients, and prices */
const DAY_CATEGORIES = [
  {
    id: 'breakfast',
    title: 'BREAKFAST',
    items: [
      {
        body: `VERTE SUNRISE
OMLET ME DOMATE TË THARA NË DIELL, SPINAQ, DJATH, KARROTË, ULLINJË.`,
        price: '4.30',
      },
      {
        body: `FARMHOUSE MORNING
VEZË TË SKUQURA NË SY DHE KËPURDHA`,
        price: '4.20',
      },
    ],
  },
  {
    id: 'salads',
    title: 'SALADS',
    items: [
      {
        body: `OCEAN BOWL
SALLATË E GJELBËR , RUKOLLË, TUNA, QEPË, MOZARELLA`,
        price: '6.40',
      },
      {
        body: `VERTE SALAD
MISH PULË, DOMATINI, RUKOLA, SALLATË TË GJELBËR, KUBËZA DJATHI, PARMEZAN`,
        price: '6.40',
      },
    ],
  },
  {
    id: 'burgers-sandwiches',
    title: 'BURGERS AND SANDWICHES',
    items: [
      {
        body: `GOLDEN CRUNCH BURGER
MISH VIQI, KAQKAVALL, PROSHUTË, SALCË, QEPË TË FËRGUARA, PATATE`,
        price: '5.50',
      },
      {
        body: `BURGER
MISH PULE CRUNCH, KAQKAVALL, SALCË, PATATE`,
        price: '5.30',
      },
      {
        body: `RUSTICO PROSCIUTTO
PROSHUTË E THATË VIQI, KAQKAVALL, SALCË, SALLATË GJELBËRT, PATATE`,
        price: '4.50',
      },
      {
        body: `BEEF SANDWICH
MISH VIQI, KËPURDHA TË FËRGUARA, SALCË, KAQKAVALL, PATATE`,
        price: '4.90',
      },
      {
        body: `CHICKEN SANDWICH
MISH PULE CRUNCH, SALCË, SPEC I GJELBËRT, PATATE`,
        price: '4.60',
      },
      {
        body: `VEGGIE SANDWICH
DOMATE TE THATA,SALLATE,SPEC I GJELBERT,DJATH,PARMEZAN.`,
        price: '4.20',
      },
    ],
  },
]

const NIGHT_CATEGORIES = [
  {
    id: 'risotto',
    title: 'RISSOTO',
    items: [
      {
        body: `BEEF RISSOTO
MISH VIQI, KUNGULLESH, KËPURDHA, KARROTË, SPEC, QEPË E KUQE, PARMEZAN`,
        price: '5.90',
      },
      {
        body: `SHRIMP RISSOTO
KARKALEC, MAGDANOZ TË FRESKËT, HUDHËR, LIMON`,
        price: '6.00',
      },
      {
        body: `CHICKEN RISSOTO
MISH PULE, KARROTË, KËPURDHA QEPË TË KUQE, PARMEZAN`,
        price: '5.30',
      },
      {
        body: `GARDEN HARVEST RISOTTO
KËPURDHA, KUNGULLESHË, KARROTË, SPEC TË KUQ, SPEC TË GJELBËR, QEPË TE KUQE, PARMEZAN`,
        price: '5.90',
      },
    ],
  },
  {
    id: 'pasta',
    title: 'PASTA',
    items: [
      {
        body: `PASTA CARBONARA
PROSHUTË E TYMOSUR, SALCË PANA,PARMEZAN`,
        price: '6.20',
      },
      {
        body: `PASTA ARRABIATA
SALCE DOMATESH,SALCE PIKANTE`,
        price: '5.80',
      },
      {
        body: `PASTA CHICKEN PESTO
MISH PULE,PESTO,SALCE PANA,PARMEZAN`,
        price: '6.20',
      },
      {
        body: `PASTA BOLOGNESE
MISH VIQI, SALCË DOMATESH, PARMEZAN`,
        price: '6.70',
      },
      {
        body: `QUATTRO TESORI
PARMEZAN,GORGONZOLA,PROVOLONE,FONTINA`,
        price: '7.90',
      },
      {
        body: `LEMON FARFELLE DI VERTE
LEMON,KARROTE,PARMEZAN,MAGDANOZ TE FRESKET,ROZMARINE`,
        price: '5.90',
      },
    ],
  },
  {
    id: 'night-bites',
    title: 'NIGHT BITES',
    items: [
      {
        body: `FINGERS, KËPURDHA, DJATH I FËRGUAR, SALCË`,
        price: '7.90',
      },
    ],
  },
  {
    id: 'grandmas-sweet-finish',
    title: "GRANDMA'S SWEET FINISH",
    items: [
      {
        body: "GRANDMA'S SWEET FINISH",
        price: '3.00',
      },
    ],
  },
]

function MenuCategory({ category }) {
  const { t } = useLanguage()

  return (
    <section className="menu-category">
      <h2 className="menu-category__title">{category.title}</h2>
      {category.id === 'breakfast' ? (
        <p className="menu-category__note">{t('menu.breakfastUntil')}</p>
      ) : null}
      <div className="menu-category__line" aria-hidden="true" />
      <ul className="menu-category__list">
        {category.items.map((item, index) => (
          <li key={`${category.id}-${index}`} className="menu-card">
            <div className="menu-card__text">
              <p className="menu-card__body">{item.body}</p>
            </div>
            <span className="menu-card__price">€{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Menu() {
  const { t } = useLanguage()
  const [refTitle, titleVisible] = useVisible(0.2)
  const [refMenu, menuVisible] = useVisible(0.1)

  return (
    <div className="menu-page">
      <section ref={refTitle} className={`menu-header ${titleVisible ? 'visible' : ''}`}>
        <h1 className="menu-header__title">{t('menu.title')}</h1>
        <div className={`section-line ${titleVisible ? 'visible' : ''}`} />
      </section>

      <div ref={refMenu} className={`menu-board ${menuVisible ? 'visible' : ''}`}>
        {DAY_CATEGORIES.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}

        <footer className="menu-night">
          <div className="menu-night__line" aria-hidden="true" />
          <p className="menu-night__label">{t('menu.nightLabel')}</p>
        </footer>

        {NIGHT_CATEGORIES.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
