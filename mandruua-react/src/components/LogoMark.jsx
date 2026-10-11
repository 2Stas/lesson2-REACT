export default function LogoMark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30">
      <circle cx="15" cy="15" r="13" fill="none" stroke="#1F4747" strokeWidth="2" />
      <path d="M15 4 V26 M4 15 H26" stroke="#B8863B" strokeWidth="1" />
      <path d="M15 8 L18 15 L15 22 L12 15 Z" fill="#1F4747" />
    </svg>
  );
}
