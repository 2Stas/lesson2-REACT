import { images } from '../utils/images.js';

export default function Team() {
  return (
    <>
      <div className="wrap page-head">
        <h1>Люди, які поведуть вас маршрутом</h1>
        <p className="lede">
          Кожен маршрут веде людина, яка сама його пройшла. Штамп на картці — не декор,
          а роки, які вона вже в дорозі.
        </p>
      </div>

      <section>
        <div className="wrap">
          <div className="team-grid">
            <article className="dossier">
              <div className="stamp">
                9 РОКІВ<br />В ДОРОЗІ
              </div>
              <div className="photo">
                <img
                  src={images.atlasOksana}
                  alt="Оксана Гриб"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <h3>Оксана Гриб</h3>
                <div className="role">Засновниця, гірські маршрути</div>
                <p className="bio">
                  Провела понад 40 груп Карпатами й Альпами. Знає, де в горах ставити намет, а де — краще не варто.
                </p>
              </div>
            </article>

            <article className="dossier">
              <div className="stamp">
                6 РОКІВ<br />В ДОРОЗІ
              </div>
              <div className="photo">
                <img
                  src={images.atlasTaras}
                  alt="Тарас Волошин"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <h3>Тарас Волошин</h3>
                <div className="role">Морські та вітрильні тури</div>
                <p className="bio">
                  Капітан з ліцензією, планує маршрути узбережжям Адріатики так, щоб уникати туристичних натовпів.
                </p>
              </div>
            </article>

            <article className="dossier">
              <div className="stamp">
                4 РОКИ<br />В ДОРОЗІ
              </div>
              <div className="photo">
                <img
                  src={images.atlasMarta}
                  alt="Марта Стеценко"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <h3>Марта Стеценко</h3>
                <div className="role">Міські вікенди, координація</div>
                <p className="bio">
                  Складає маршрути вихідного дня так, щоб встигнути побачити місто, а не тільки чергу до нього.
                </p>
              </div>
            </article>

            <article className="dossier">
              <div className="stamp">
                5 РОКІВ<br />В ДОРОЗІ
              </div>
              <div className="photo">
                <img
                  src={images.atlasIvan}
                  alt="Іван Демчук"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <h3>Іван Демчук</h3>
                <div className="role">Індивідуальні маршрути</div>
                <p className="bio">
                  Веде перемовини з готелями та гідами на місці — саме тому індивідуальний тур завжди складається під запит.
                </p>
              </div>
            </article>

            <article className="dossier">
              <div className="stamp">
                3 РОКИ<br />В ДОРОЗІ
              </div>
              <div className="photo">
                <img
                  src={images.atlasYulia}
                  alt="Юлія Ковтун"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <h3>Юлія Ковтун</h3>
                <div className="role">Менеджерка бронювань</div>
                <p className="bio">
                  Перша, з ким ви поговорите, і остання, хто перевірить, що квитки й номер точно на місці.
                </p>
              </div>
            </article>

            <article className="dossier">
              <div className="stamp">
                7 РОКІВ<br />В ДОРОЗІ
              </div>
              <div className="photo">
                <img
                  src={images.atlasRoman}
                  alt="Роман Байрак"
                  loading="lazy"
                />
              </div>
              <div className="info">
                <h3>Роман Байрак</h3>
                <div className="role">Гід, Карпати та Кавказ</div>
                <p className="bio">
                  Водить високогірні переходи й відповідає за спорядження групи від і до.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}