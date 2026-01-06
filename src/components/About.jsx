import { responsibilities } from "../data/responsibilities";
export default function About() {
  return (
    <section id="about" style={{ minHeight: "100vh" }} className="container py-5">
      {/* Section title */}
      <div className="d-flex justify-content-center p-5">
        <p className="rounded-5 about-title p-3">Who am I?</p>
      </div>

      <div className="row align-items-start justify-content-center">
        {/* LEFT */}
        <div className="col-lg-6">
          <div className="about-left">
            <span className="about-badge shadow">
              <i className="fa-solid fa-code"></i>
              Fullstack Developer | នៅស្រុកខ្មែរ
            </span>

            <h2 className="about-heading mt-3">
              Learning, building, <br /> and improving every day
            </h2>

            <div className="about-text-box fs-5 mt-3">
              <p>
                A passionate web and app developer with a knack for creating
                stunning and user-friendly websites. With a background in
                computer science and a love for coding, I specialize in
                front-end development using HTML, CSS, and JavaScript. I enjoy
                turning complex problems into simple, beautiful, and intuitive
                designs. When I'm not coding, you can find me exploring the
                latest tech trends or working on personal projects to further
                hone my skills.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-lg-6">
          <span className="about-badge mb-5 shadow">
            <i className="fa-solid fa-gears"></i>
            What I specialize in
          </span>
          <div className="row g-4">
            {responsibilities.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="about-card">
                  <i className={item.icon}></i>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}