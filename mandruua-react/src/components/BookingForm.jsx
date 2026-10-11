import { useState } from 'react';
import Modal from './Modal.jsx';

const PHONE_PATTERN = /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/;

function formatPhone(raw) {
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('38')) digits = digits.slice(2);
  digits = digits.slice(0, 10); // 0XX XXX XX XX

  let out = '+38';
  if (digits.length > 0) out += ' (' + digits.slice(0, 3);
  if (digits.length >= 3) out += ')';
  if (digits.length > 3) out += ' ' + digits.slice(3, 6);
  if (digits.length > 6) out += '-' + digits.slice(6, 8);
  if (digits.length > 8) out += '-' + digits.slice(8, 10);
  return out;
}

export default function BookingForm({ discountAvailable }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value));
  }

  function validate() {
    const next = {};
    if (name.trim().length < 2) next.name = 'Вкажіть імʼя (мінімум 2 символи).';
    if (!PHONE_PATTERN.test(phone)) next.phone = 'Формат: +38 (0XX) XXX-XX-XX.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setShowModal(true);
    setName('');
    setPhone('');
    setErrors({});
  }

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <h3>Залишити заявку на бронювання</h3>

        <div className="field">
          <label htmlFor="name">Ім'я</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше імʼя"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="field">
          <label htmlFor="phone">Телефон</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+38 (0__) ___-__-__"
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <div className={`discount-row ${discountAvailable ? '' : 'locked'}`}>
          <span>🎟</span>
          <span>
            {discountAvailable
              ? 'Знижка 10% буде застосована до цього бронювання'
              : 'Знижка 10% заблокована — час акції вийшов'}
          </span>
        </div>

        <button type="submit" className="btn brass">Забронювати</button>
      </form>

      {showModal && (
        <Modal title="Дякуємо!" onClose={() => setShowModal(false)}>
          Менеджер зв'яжеться з вами найближчим часом.
        </Modal>
      )}
    </>
  );
}
