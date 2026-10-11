import { Link } from 'react-router-dom';
import RouteLine from '../components/RouteLine.jsx';

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="eyebrow-mark">
            <svg width="30" height="30" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="12" fill="none" stroke="#EFE7D8" strokeWidth="1.4" />
              <path d="M15 6 L18 15 L15 24 L12 15 Z" fill="#B8863B" />
            </svg>
          </div>
          <h1>Кожна подорож починається з точки на карті.</h1>
          <p className="lede">
            МандриUA — невелика агенція, яка планує маршрути, а не продає путівки. Ми
            прокладаємо шлях, домовляємось на місці та тримаємо зв'язок з вами всю дорогу.
          </p>
          <Link to="/contacts" className="btn">Забронювати місце</Link>
        </div>

        <div className="wrap" style={{ marginTop: 56 }}>
          <RouteLine />
        </div>
      </header>

      <div className="wrap home-strip">
        <div><strong>7 років</strong> у бізнесі</div>
        <div><strong>34 країни</strong> в наших маршрутах</div>
        <div><strong>Особистий супровід</strong> на кожному турі</div>
      </div>
    </>
  );
}
