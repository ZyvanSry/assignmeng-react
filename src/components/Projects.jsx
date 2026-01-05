import { projects } from "../data/projects.jsx";

export default function Projects() {
  return (
    <section id="project" className="container px-5">
      <div className="row">
        {projects.map((p, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow rounded-5">
              <img src={p.image} className="card-img-top rounded-5" />
              <div className="card-body">
                <h5>{p.title}</h5>
                <p className="fs-6">{p.text}</p>
                <span className="btn btn-dark disabled">{p.tech}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
