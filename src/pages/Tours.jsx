import TourCard from '../components/TourCard.jsx';

function Tours() {
    return (
        <>
            <div className="wrap page-head">
                <h1>Галерея турів</h1>
                <p className="lede">Наведіть на картку, щоб побачити ціну та деталі маршруту.</p>
            </div>

            <section>
                <div className="wrap">
                    <div className="tours-grid">
                        <TourCard
                            tour={{
                                title: 'Чорногірський хребет',
                                place: 'Карпати',
                                seed: 'atlas1',
                                price: '4 200 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Острів Хвар',
                                place: 'Хорватія',
                                seed: 'atlas2',
                                price: '18 900 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Ріо Дору',
                                place: 'Порту',
                                seed: 'atlas3',
                                price: '14 500 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Ущелина Труso',
                                place: 'Грузія',
                                seed: 'atlas4',
                                price: '9 800 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Кіклади',
                                place: 'Греція',
                                seed: 'atlas5',
                                price: '27 300 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Старе місто',
                                place: 'Краків',
                                seed: 'atlas6',
                                price: '6 100 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Синевир',
                                place: 'Карпати',
                                seed: 'atlas7',
                                price: '3 400 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Гранд базар',
                                place: 'Стамбул',
                                seed: 'atlas8',
                                price: '12 700 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Долина Ізерталь',
                                place: 'Австрія',
                                seed: 'atlas9',
                                price: '31 000 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Амальфітанське узбережжя',
                                place: 'Італія',
                                seed: 'atlas10',
                                price: '29 500 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Вежі Тбілісі',
                                place: 'Грузія',
                                seed: 'atlas11',
                                price: '7 300 грн',
                            }}
                        />
                        <TourCard
                            tour={{
                                title: 'Фʼорди Люстрафʼорд',
                                place: 'Норвегія',
                                seed: 'atlas12',
                                price: '34 900 грн',
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tours;