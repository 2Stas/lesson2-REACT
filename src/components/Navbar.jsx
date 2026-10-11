import { NavLink } from 'react-router-dom';
import LogoMark from './LogoMark.jsx';

const LINKS = [
  { to: '/', label: 'Головна' },
  { to: '/about', label: 'Про нас' },
  { to: '/team', label: 'Наша команда' },
  { to: '/tours', label: 'Галерея турів' },
  { to: '/contacts', label: 'Контакти' },
];

function Navbar() {
  
  return (
    <nav className="site-nav">
      <div className="wrap">
        <NavLink to="/" className="brand">
          <LogoMark />
          МандриUA
        </NavLink>

        <ul className="nav-links">
          <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Наша команда
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tours"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Галерея турів
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Контакти
              </NavLink>
            </li>
          <li>
            <NavLink to="/roulette" className="nav-cta">
              ✈️ Куди полетіти?
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;