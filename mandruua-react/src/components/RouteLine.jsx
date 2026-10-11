export default function RouteLine() {
  return (
    <svg className="route-line" viewBox="0 0 1064 120" preserveAspectRatio="none">
      <path d="M10 90 C 220 10, 380 130, 540 60 S 860 10, 1054 70" />
      <circle cx="10" cy="90" r="5" />
      <circle cx="540" cy="60" r="5" />
      <circle cx="1054" cy="70" r="5" />
    </svg>
  );
}
