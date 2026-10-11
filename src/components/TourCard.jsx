import { images } from '../utils/images.js';

function TourCard({ tour }) {
  return (
    <div className="tour-tile">
      <div className="frame">
        <img
          src={images[tour.seed]}
          alt={tour.title}
        />
      </div>
      <div className="overlay">
        <div className="overlay-inner">
          <h3>{tour.title}</h3>
          <div className="place">{tour.place}</div>
          <div className="price">{tour.price}</div>
        </div>
      </div>
    </div>
  );
}
export default TourCard;