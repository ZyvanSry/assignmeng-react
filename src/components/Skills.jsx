import { skills } from "../data/skills.jsx";

export default function Skills() {
  return (
    <section id="skill" className="container">
      <div className="row justify-content-center">
        {skills.map((cat, i) => (
          <div key={i} className="col-lg-2 col-md-4 mb-4">
            <div className="card h-100 shadow rounded-5">
              <div className="card-header">{cat.category}</div>
              <div className="card-body">
                {cat.skills.map((s, idx) => (
                  <div key={idx}>
                    <small className="fs-6">{s}</small>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar "
                        style={{ width: `${cat.progress[idx]}%`, background: "#bb78fe" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
