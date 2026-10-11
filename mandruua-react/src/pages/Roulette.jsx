import { useState } from 'react';
import tours, { budgetLabels, typeLabels } from '../data/tours.js';

export default function Roulette() {
  const [budget, setBudget] = useState('');
  const [type, setType] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [spinning, setSpinning] = useState(false);

  function spin() {
    setSpinning(true);
    setSearched(false);

    // brief pause makes the "spin" feel like something is happening
    setTimeout(() => {
      const pool = tours.filter(
        (t) => (budget ? t.budget === budget : true) && (type ? t.type === type : true)
      );
      const pick = pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
      setResult(pick);
      setSearched(true);
      setSpinning(false);
    }, 500);
  }

  return (
    <>
      <div className="wrap page-head">
        <h1>Куди полетіти?</h1>
        <p className="lede">
          Оберіть фільтри або залиште поле «Будь-який» — рулетка підбере тур із усього каталогу.
        </p>
      </div>

      <section>
        <div className="wrap">
          <div className="roulette-panel">
            <div className="roulette-filters">
              <div className="field">
                <label htmlFor="budget">Бюджет</label>
                <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
                  <option value="">Будь-який</option>
                  {Object.entries(budgetLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="type">Тип туру</label>
                <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="">Будь-який</option>
                  {Object.entries(typeLabels).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="btn brass" type="button" onClick={spin} disabled={spinning}>
              {spinning ? 'Крутимо...' : 'Крутити рулетку'}
            </button>

            {searched && result && (
              <div className="roulette-result">
                <img src={`https://picsum.photos/seed/${result.seed}/300/300`} alt={result.title} />
                <div>
                  <h3>{result.title}</h3>
                  <div className="meta">{result.place}</div>
                  <div className="meta">{budgetLabels[result.budget]} · {typeLabels[result.type]}</div>
                  <div className="price">{result.price}</div>
                </div>
              </div>
            )}

            {searched && !result && (
              <p className="roulette-empty">Нічого не знайдено для цих фільтрів — спробуйте інше поєднання.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
