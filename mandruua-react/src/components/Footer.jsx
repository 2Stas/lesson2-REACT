import { Link } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Головна' },
  { to: '/about', label: 'Про нас' },
  { to: '/team', label: 'Наша команда' },
  { to: '/tours', label: 'Галерея турів' },
  { to: '/contacts', label: 'Контакти' },
  { to: '/roulette', label: 'Куди полетіти?' },
];

const SOCIALS = [
  { label: 'IG', href: 'https://instagram.com' },
  { label: 'FB', href: 'https://facebook.com' },
  { label: 'TG', href: 'https://t.me' },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="brand" style={{ fontSize: 18 }}>МандриUA</div>
          <div className="footer-social">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <ul className="footer-nav">
          {NAV.map((n) => (
            <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
          ))}
        </ul>

        <div className="footer-bottom">
          <span>© 2026 МандриUA</span>
          <span>Івано-Франківськ, вул. Незалежності, 12</span>
        </div>
      </div>
    </footer>
  );
}
