export default function Home() {
  return (
    <section id="home" className="container-fluid">
      <div className="row align-items-center py-5 mt-5">
        <div className="col-lg-6 col-md-12 text-center text-lg-start px-3 py-5">
          <h1 className="display-3 fw-bold mb-3">Wassup, I'm Sry</h1>
          <p className="lead mb-4">
            <span className="fw-bold">A Fullstack developer wannabe,</span> and a
            passionate web and app developer with a knack for creating
            stunning and user-friendly websites.
          </p>

          <div className="icon-item gap-4 d-flex justify-content-start">
            <a
              href="https://github.com/ZyvanSry"
              className="btn btn-light btn-lg rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "50px", height: "50px" }}
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
            <a
              href="https://t.me/MeyMengsry"
              className="btn btn-light btn-lg rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "50px", height: "50px" }}
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://web.facebook.com/zyvan.3.0"
              className="btn btn-light btn-lg rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "50px", height: "50px" }}
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 d-flex justify-content-center py-5">
          <div className="img-frame1 rounded-circle d-flex justify-content-center align-items-center p-3">
            <div className="img-frame rounded-circle d-flex justify-content-center align-items-center p-3">
              <img
                className="img-pic rounded-circle"
                src="../images/photo_2025-12-24_20-08-11.jpg"
                alt="Sry Van Meng"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
