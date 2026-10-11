import services from '../data/services.js';
import ServiceCard from '../components/ServiceCard.jsx';

export default function About() {
  return (
    <>
      <div className="wrap page-head">
        <h1>Ми плануємо маршрут, а не продаємо путівку</h1>
        <p className="lede">
          МандриUA з'явився у 2019 році з простої ідеї: подорож має відповідати людині,
          а не каталогу готелів. Ми самі проходимо кожен маршрут, перш ніж запропонувати
          його вам, і тримаємо групи невеликими — до 12 осіб.
        </p>
      </div>

      <section>
        <div className="wrap">
          <h2 style={{ fontSize: 26, maxWidth: '20ch' }}>Що ми пропонуємо</h2>
          <div className="services">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} text={s.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
