import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoMark from './LogoMark.jsx';
import useScrolled from '../hooks/useScrolled.js';

const LINKS = [
  { to: '/', label: 'Головна' },
  { to: '/about', label: 'Про нас' },
  { to: '/team', label: 'Наша команда' },
  { to: '/tours', label: 'Галерея турів' },
  { to: '/contacts', label: 'Контакти' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);

  return (
    <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <LogoMark />
          МандриUA
        </NavLink>

        <button
          className="nav-toggle-btn"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/roulette" className="nav-cta" onClick={() => setOpen(false)}>
              ✈️ Куди полетіти?
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
