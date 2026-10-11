import tours from '../data/tours.js';
import TourCard from '../components/TourCard.jsx';

export default function Tours() {
  return (
    <>
      <div className="wrap page-head">
        <h1>Галерея турів</h1>
        <p className="lede">Наведіть на картку, щоб побачити ціну та деталі маршруту.</p>
      </div>

      <section>
        <div className="wrap">
          <div className="tours-grid">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
