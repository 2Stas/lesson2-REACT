import { useEffect, useState } from 'react';
import CountdownBanner from '../components/CountdownBanner.jsx';
import BookingForm from '../components/BookingForm.jsx';

export default function Contacts() {
  const [remaining, setRemaining] = useState(60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const isExpired = remaining === 0;

  return (
    <>
      <div className="wrap page-head">
        <h1>Зв'яжіться з нами</h1>
        <p className="lede">Відповідаємо особисто, без call-центру. Найшвидше — телефоном або в месенджері.</p>
      </div>

      <section>
        <div className="wrap contact-grid">
          <div>
            <ul className="contact-list">
              <li><span>Телефон</span>+38 (067) 123-45-67</li>
              <li><span>Пошта</span>booking@mandruua.ua</li>
              <li><span>Офіс</span>Івано-Франківськ, вул. Незалежності, 12</li>
              <li><span>Графік</span>Пн–Пт, 10:00–19:00</li>
              <li><span>Месенджери</span>Telegram, Viber — @mandruua</li>
            </ul>

            <div className="map-frame">
              <iframe
                title="Офіс МандриUA на мапі"
                src="https://www.google.com/maps?q=Ivano-Frankivsk,Nezalezhnosti%20street%2012&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="booking-col">
            <CountdownBanner remaining={remaining} isExpired={isExpired} />
            <BookingForm discountAvailable={!isExpired} />
          </div>
        </div>
      </section>
    </>
  );
}
