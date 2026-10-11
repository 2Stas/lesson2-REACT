import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="brand" style={{ fontSize: 18 }}>МандриUA</div>
          <div className="footer-social">
            <a href="https://instagram.com">IG</a>
            <a href="https://facebook.com">FB</a>
            <a href="https://t.me">TG</a>
          </div>
        </div>

        <ul className="footer-nav">
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/about">Про нас</Link></li>
          <li><Link to="/team">Наша команда</Link></li>
          <li><Link to="/tours">Галерея турів</Link></li>
          <li><Link to="/contacts">Контакти</Link></li>
          <li><Link to="/roulette">Куди полетіти?</Link></li>
        </ul>

        <div className="footer-bottom">
          <span>© 2026 МандриUA</span>
          <span>Івано-Франківськ, вул. Незалежності, 12</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;