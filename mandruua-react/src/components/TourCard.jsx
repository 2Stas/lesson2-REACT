export default function TourCard({ tour }) {
  return (
    <div className="tour-tile">
      <div className="frame">
        <img
          src={`https://picsum.photos/seed/${tour.seed}/500/380`}
          alt={tour.title}
          loading="lazy"
        />
      </div>
      <div className="overlay">
        <div className="overlay-inner">
          <h3>{tour.title}</h3>
          <div className="place">{tour.place}</div>
          <div className="price">{tour.price}</div>
          <button className="btn brass" type="button">Детальніше</button>
        </div>
      </div>
    </div>
  );
}
