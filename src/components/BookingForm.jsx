import { useState } from 'react';

function BookingForm({ discountAvailable = true }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Введіть ваше імʼя";
    }

    if (!phone.trim()) {
      newErrors.phone = "Введіть номер телефону";
    } else if (!/^\+?[\d\s\-()]{10,18}$/.test(phone)) {
      newErrors.phone = "Невірний формат телефону";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log('Дані бронювання:', { name, phone, discountAvailable });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <h3>Залишити заявку на бронювання</h3>

      {submitted && (
        <div className="success-message" style={{ color: 'green', marginBottom: '15px', fontSize: '14px' }}>
          Дякуємо! Ваша заявка прийнята. Ми зв'яжемося з вами найближчим часом.
        </div>
      )}

      <div className="field">
        <label htmlFor="name">Ім'я</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
          }}
          placeholder="Ваше імʼя"
        />
        {errors.name && <span className="error" style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="phone">Телефон</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
          }}
          placeholder="+38 (0__) ___-__-__"
        />
        {errors.phone && <span className="error" style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
      </div>

      <div className={`discount-row ${discountAvailable ? '' : 'locked'}`}>
        <span>🎟</span>
        <span
          style={{
            textDecoration: discountAvailable ? 'none' : 'line-through',
            opacity: discountAvailable ? 1 : 0.6,
          }}
        >
          {discountAvailable
            ? 'Знижка 10% буде застосована до цього бронювання'
            : 'Знижка 10% заблокована — час акції вийшов'}
        </span>
      </div>

      <button type="submit" className="btn brass">Забронювати</button>
    </form>
  );
}

export default BookingForm;