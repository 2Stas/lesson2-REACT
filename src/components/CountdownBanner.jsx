function CountdownBanner({ remaining, isExpired }) {
  const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
  const seconds = String(remaining % 60).padStart(2, '0');

  return (
    <div className="board">
      <h3>Знижка 10% на бронювання</h3>
      <p className="sub">Діє тільки поки триває відлік на цій сторінці.</p>

      <div className="flip-clock" aria-live="polite">
        <div className="digit">{minutes}:{seconds}</div>
      </div>

      <p className="status">
        {isExpired
          ? 'Акцію завершено, але ви все ще можете забронювати тур за стандартною ціною.'
          : 'Встигніть залишити заявку до завершення відліку.'}
      </p>
    </div>
  );
}

export default CountdownBanner;