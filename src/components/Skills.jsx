import { skills } from "../data/skills.jsx";

export default function Skills() {
  return (
    <section id="skill" style={{ minHeight: "100vh", minWidth:"100vw" }} className="container-fluid">
      
      <div className="container-fluid d-flex justify-content-center">
        <p className="rounded-5 about-title  p-4">Skills</p>
      </div>
      <div className="container-fluid  row justify-content-center ">
        {skills.map((cat, i) => (
          <div key={i} className="col-lg-4 col-xl-2 col-md-4 mb-4 ">
            <div className="card fs-3 h-100 shadow rounded-5">
              <div className="card-header">{cat.category}</div>
              <div className="card-body">
                {cat.skills.map((s, idx) => (
                  <div key={idx}>
                    <small className="fs-6">{s}</small>
                    <div style={{ height: "10px" }} className="progress mb-2">
                      <div
                        className="progress-bar "
                        style={{ width: `${cat.progress[idx]}%`, height: "10px", background: "#bb78fe" }}
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
