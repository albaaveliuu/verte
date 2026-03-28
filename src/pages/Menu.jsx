import { useLanguage } from '../i18n/LanguageContext'
import { useVisible } from '../hooks/useVisible'
import './Menu.css'

/** Verbatim copy from house menu — do not paraphrase line breaks or wording */
const CATEGORIES = [
  {
    id: 'mengjesi',
    title: 'MËNGJESI',
    items: [
      {
        body: `SUPË SEZONALE – Seasonal
homemade soup prepared
with fresh ingredients`,
        price: '2.00',
      },
      {
        body: `BREAKFAST VERTE –
Homemade Omelette with
fresh herbs and vegetables`,
        price: '4.20',
      },
      {
        body: 'CLASSIC BREAKFAST – Sunnyside-up eggs served fresh',
        price: '3.20',
      },
    ],
  },
  {
    id: 'burgers',
    title: 'BURGERS',
    items: [
      {
        body: `BURGER VERTE – Signature
house burger with special
sauce`,
        price: '4.20',
      },
      {
        body: `CHICKEN BURGER – Crispy
grilled chicken burger`,
        price: '4.20',
      },
    ],
  },
  {
    id: 'sallata',
    title: 'SALLATA',
    items: [
      {
        body: `SALLATË CEASAR – Fresh salad
with grilled chicken`,
        price: '4.50',
      },
      {
        body: `SALLATË TUNA – Tuna salad
with vegetables`,
        price: '4.50',
      },
    ],
  },
  {
    id: 'burrito',
    title: 'BURRITO',
    items: [
      {
        body: `CHICKEN BURRITO – Filled
tortilla with chicken, rice, and
fresh toppings`,
        price: '4.20',
      },
      {
        body: `CHICKEN CRUNCH WRAP –
Filled wrapwith chicken
crunch, rice, and fresh
toppings`,
        price: '4.20',
      },
    ],
  },
  {
    id: 'pasta',
    title: 'PASTA',
    items: [
      {
        body: `PASTA CARBONARA – Creamy
pasta with bacon and
parmesan`,
        price: '4.80',
      },
      {
        body: `PASTA PULË PESTO – Chicken
pasta with basil pesto sauce`,
        price: '4.80',
      },
      {
        body: `PASTA ARRABIATA – Spicy
tomato sauce pasta`,
        price: '4.20',
      },
      {
        body: `PASTA BOLOGNESE – Pasta
with slow-cooked meat sauce`,
        price: '4.80',
      },
      {
        body: `PASTA VERTE – House special
pasta with green sauce`,
        price: '4.90',
      },
    ],
  },
  {
    id: 'rizoto',
    title: 'RIZOTO',
    items: [
      {
        body: `RIZOTO ME PULË – Creamy
risotto with chicken`,
        price: '4.80',
      },
      {
        body: `RIZOTO VEGJETARIANE –
Vegetable risotto with seasonal
produce`,
        price: '4.20',
      },
      {
        body: `RIZOTO ME MISH VIÇI –
Risotto with tender beef`,
        price: '5.90',
      },
    ],
  },
  {
    id: 'sandwiches',
    title: 'SANDWICHES',
    items: [
      {
        body: `SANDUIÇ ME PROSHUTË –
Sandwich with cured ham and
fresh ingredients`,
        price: '3.50',
      },
      {
        body: `SANDUIÇ ME PULË – Grilled
chicken sandwich with
signature sauce`,
        price: '3.50',
      },
      {
        body: `SANDUIÇ CRUNCH – Crispy
sandwich with crunchy
textures`,
        price: '3.70',
      },
      {
        body: `SANDUIÇ VEGAN – Plantbased sandwich with fresh
vegetables`,
        price: '3.20',
      },
      {
        body: `TOST VERTE -(VERTE TOAST)
– Toast with avocado and
green mix`,
        price: '3.80',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'DESSERTS',
    items: [
      {
        body: 'CHEESECAKE ME FRUTA MALI – Cheesecake with forest fruits',
        price: '3.00',
      },
      {
        body: 'TIRAMISU KLASIKE – Traditional Italian tiramisu',
        price: '3.00',
      },
      {
        body: 'LOTUS CAKE – Lotus biscuit cream cake',
        price: '3.00',
      },
    ],
  },
  {
    id: 'finger',
    title: 'FINGER FOOD',
    items: [
      {
        body: `FINGERS PULE – Crispy chicken
strips`,
        price: '5.50',
      },
      {
        body: `BRUSKETA KLASIKE – Toasted
bread with tomato and herbs`,
        price: '3.50',
      },
      {
        body: `PATATE TË SKUQURA – Golden
fried potatoes`,
        price: '3.00',
      },
    ],
  },
  {
    id: 'mezze',
    title: 'MEZZE',
    items: [
      {
        body: `MEZZE E FTOHTË – Selection of
cold appetizers`,
        price: '10.00',
      },
      {
        body: `MEZZE E NGROHTË – Selection of
warm appetizers`,
        price: '14.00',
      },
    ],
  },
]

export default function Menu() {
  const { t } = useLanguage()
  const [refTitle, titleVisible] = useVisible(0.2)
  const [refMenu, menuVisible] = useVisible(0.1)

  return (
    <div className="menu-page">
      <section ref={refTitle} className={`menu-header ${titleVisible ? 'visible' : ''}`}>
        <h1 className="menu-header__title">{t('menu.title')}</h1>
        <div className={`section-line ${titleVisible ? 'visible' : ''}`} />
        <div className="menu-header__hours">
          <p className="menu-header__hours-line">{t('menu.openEveryday')}</p>
          <p className="menu-header__hours-time">{t('menu.dayHours')}</p>
        </div>
      </section>

      <div ref={refMenu} className={`menu-board ${menuVisible ? 'visible' : ''}`}>
        {CATEGORIES.map((category) => (
          <section key={category.id} className="menu-category">
            <h2 className="menu-category__title">{category.title}</h2>
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
        ))}

        <footer className="menu-night">
          <div className="menu-night__line" aria-hidden="true" />
          <p className="menu-night__label">{t('menu.nightLabel')}</p>
          <p className="menu-night__time">{t('menu.nightHours')}</p>
        </footer>
      </div>
    </div>
  )
}
