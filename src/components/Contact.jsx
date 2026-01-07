import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!email || !message) {
      setResult("⚠️ Please fill all fields");
      return;
    }

    setResult(
      <>
        <strong className="fs-6">{email}</strong>
        <br />
        {message}
        <br />
        <br />
        📬 Message sent successfully!
      </>
    );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      style={{ minHeight: "75vh", scrollMarginTop: "300px" }}
      className="text-center p-5 h-25"
    >
      <div className="container-fluid d-flex justify-content-center">
        <p className="rounded-5 about-title  p-4">Hit me up</p>
      </div>
      <div className="container bg-light shadow rounded-5 p-4 mb-4">
        <p className="fs-4">
          Message me, don’t be shy at
          <a style={{ color: "#bb78feff" }} href="mailto:mengsrymey@gmail.com">
            <span> mengsrymey@gmail.com </span>
          </a>
          or through the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="rounded-5 container-fluid p-2 d-flex justify-content-center row"
        >
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center col-sm-12 col-lg-4 col-md-6">
            <input
              name="email"
              placeholder="Email"
              className="form-control  my-3 "
            />
            <textarea
              name="message"
              placeholder="Message"
              className="form-control "
            />
            <button
              style={{ backgroundColor: "#bb78feff" }}
              className="btn btn-light  w-100 w-md-75 w-lg-50 my-2"
            >
              Send
            </button>
          </div>
        </form>

        <div className="container-fluid d-flex justify-content-center">
          <p className=" p-3 rounded-3 fs-5">{result}</p>
        </div>
      </div>
    </section>
  );
}
