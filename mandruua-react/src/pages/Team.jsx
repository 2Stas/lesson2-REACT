import team from '../data/team.js';

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
            {team.map((member) => (
              <article className="dossier" key={member.seed}>
                <div className="stamp">
                  {member.years}<br />В ДОРОЗІ
                </div>
                <div className="photo">
                  <img
                    src={`https://picsum.photos/seed/${member.seed}/480/600`}
                    alt={member.name}
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <p className="bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
