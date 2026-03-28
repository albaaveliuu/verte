import { useLanguage } from '../i18n/LanguageContext'
import { useVisible } from '../hooks/useVisible'
import './Menu.css'

/**
 * `body` — English / house menu wording.
 * `bodySq` — Albanian: dish names kept, English description lines translated.
 */
const CATEGORIES = [
  {
    id: 'mengjesi',
    title: 'MËNGJESI',
    items: [
      {
        body: `SUPË SEZONALE – Seasonal
homemade soup prepared
with fresh ingredients`,
        bodySq: `SUPË SEZONALE – Sezonale
supë e përgatitur në shtëpi
me përbërës të freskët`,
        price: '2.00',
      },
      {
        body: `BREAKFAST VERTE –
Homemade Omelette with
fresh herbs and vegetables`,
        bodySq: `BREAKFAST VERTE –
Omletë e përgatitur në shtëpi me
barishte dhe perime të freskëta`,
        price: '4.20',
      },
      {
        body: 'CLASSIC BREAKFAST – Sunnyside-up eggs served fresh',
        bodySq: 'CLASSIC BREAKFAST – Vezë me diell, të servuara të freskëta',
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
        bodySq: `BURGER VERTE – Burger
i shtëpisë me salcë
të veçantë`,
        price: '4.20',
      },
      {
        body: `CHICKEN BURGER – Crispy
grilled chicken burger`,
        bodySq: `CHICKEN BURGER – Burger
me pulë të pjekur, i krokant`,
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
        bodySq: `SALLATË CEASAR – Sallatë e freskët
me pulë të pjekur`,
        price: '4.50',
      },
      {
        body: `SALLATË TUNA – Tuna salad
with vegetables`,
        bodySq: `SALLATË TUNA – Sallatë tunë
me perime`,
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
        bodySq: `CHICKEN BURRITO – Tortilla e mbushur
me pulë, oriz dhe
shtesa të freskëta`,
        price: '4.20',
      },
      {
        body: `CHICKEN CRUNCH WRAP –
Filled wrapwith chicken
crunch, rice, and fresh
toppings`,
        bodySq: `CHICKEN CRUNCH WRAP –
Wrap i mbushur me pulë
krokante, oriz dhe shtesa
të freskëta`,
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
        bodySq: `PASTA CARBONARA – Makarona kremoze
me mish të pjekur dhe
parmigiano`,
        price: '4.80',
      },
      {
        body: `PASTA PULË PESTO – Chicken
pasta with basil pesto sauce`,
        bodySq: `PASTA PULË PESTO – Makarona me pulë
dhe salcë pesto basile`,
        price: '4.80',
      },
      {
        body: `PASTA ARRABIATA – Spicy
tomato sauce pasta`,
        bodySq: `PASTA ARRABIATA – Makarona me salcë
domatesh të pikantme`,
        price: '4.20',
      },
      {
        body: `PASTA BOLOGNESE – Pasta
with slow-cooked meat sauce`,
        bodySq: `PASTA BOLOGNESE – Makarona me salcë
mishi të gatuar ngadalë`,
        price: '4.80',
      },
      {
        body: `PASTA VERTE – House special
pasta with green sauce`,
        bodySq: `PASTA VERTE – Makarona speciale
e shtëpisë me salcë të gjelbër`,
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
        bodySq: `RIZOTO ME PULË – Rizoto kremoz
me pulë`,
        price: '4.80',
      },
      {
        body: `RIZOTO VEGJETARIANE –
Vegetable risotto with seasonal
produce`,
        bodySq: `RIZOTO VEGJETARIANE –
Rizoto me perime
sezonale`,
        price: '4.20',
      },
      {
        body: `RIZOTO ME MISH VIÇI –
Risotto with tender beef`,
        bodySq: `RIZOTO ME MISH VIÇI –
Rizoto me mish viçi të butë`,
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
        bodySq: `SANDUIÇ ME PROSHUTË –
Sanduiç me proshutë dhe
përbërës të freskët`,
        price: '3.50',
      },
      {
        body: `SANDUIÇ ME PULË – Grilled
chicken sandwich with
signature sauce`,
        bodySq: `SANDUIÇ ME PULË – Sanduiç me pulë
të pjekur dhe salcë
të veçantë`,
        price: '3.50',
      },
      {
        body: `SANDUIÇ CRUNCH – Crispy
sandwich with crunchy
textures`,
        bodySq: `SANDUIÇ CRUNCH – Sanduiç i krokant
me tekstura të ndryshme`,
        price: '3.70',
      },
      {
        body: `SANDUIÇ VEGAN – Plantbased sandwich with fresh
vegetables`,
        bodySq: `SANDUIÇ VEGAN – Sanduiç bimësh me
perime të freskëta`,
        price: '3.20',
      },
      {
        body: `TOST VERTE -(VERTE TOAST)
– Toast with avocado and
green mix`,
        bodySq: `TOST VERTE -(VERTE TOAST)
– Tost me avokado dhe
përzierje të gjelbër`,
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
        bodySq: 'CHEESECAKE ME FRUTA MALI – Cheesecake me fruta pylli',
        price: '3.00',
      },
      {
        body: 'TIRAMISU KLASIKE – Traditional Italian tiramisu',
        bodySq: 'TIRAMISU KLASIKE – Tiramisu tradicional italiane',
        price: '3.00',
      },
      {
        body: 'LOTUS CAKE – Lotus biscuit cream cake',
        bodySq: 'LOTUS CAKE – Tortë kreme me biskota Lotus',
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
        bodySq: `FINGERS PULE – Shirita pule
të krokantë`,
        price: '5.50',
      },
      {
        body: `BRUSKETA KLASIKE – Toasted
bread with tomato and herbs`,
        bodySq: `BRUSKETA KLASIKE – Bukë e pjekur
me domate dhe barishte`,
        price: '3.50',
      },
      {
        body: `PATATE TË SKUQURA – Golden
fried potatoes`,
        bodySq: `PATATE TË SKUQURA – Patate të skuqura
të arta`,
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
        bodySq: `MEZZE E FTOHTË – Përzgjedhje parapjesh
të ftohta`,
        price: '10.00',
      },
      {
        body: `MEZZE E NGROHTË – Selection of
warm appetizers`,
        bodySq: `MEZZE E NGROHTË – Përzgjedhje parapjesh
të ngrohta`,
        price: '14.00',
      },
    ],
  },
]

export default function Menu() {
  const { t, locale } = useLanguage()
  const [refTitle, titleVisible] = useVisible(0.2)
  const [refMenu, menuVisible] = useVisible(0.1)

  const dishBody = (item) =>
    locale === 'sq' && item.bodySq ? item.bodySq : item.body

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
                    <p className="menu-card__body">{dishBody(item)}</p>
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
