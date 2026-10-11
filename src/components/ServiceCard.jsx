
function ServiceCard({ title, text }) {

  return (
    <div className="service visible">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ServiceCard;