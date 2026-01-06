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
    <strong>{email}</strong><br />
    {message}<br /><br />
    📬 Message sent successfully!
  </>
);

    e.target.reset();
  };

  return (
    <section id="contact" style={{ minHeight: "75vh", scrollMarginTop: "300px" }} className="text-center p-5 h-25">
      <div className="container bg-light shadow rounded-5 p-4 mb-4">
      <div className="d-flex justify-content-center ">
            <p className="rounded-5 about-title">Hit me up!</p>
          </div>

          <p className="fs-4">
            Message me, don’t be shy at
            <a
              style={{ color: "#bb78feff" }}

              href="mailto:mengsrymey@gmail.com"
            >
              <span> mengsrymey@gmail.com </span>
            </a>
            or through the form below.
          </p>
          
      <form onSubmit={handleSubmit} className=" w-50 rounded-5 container-fluid p-2">
        <input name="email" placeholder="Email" className="form-control width-form my-3" />
        <textarea name="message" placeholder="Message" className="form-control width-form " />
        <button style={{ backgroundColor: "#bb78feff", color: "black" }} className="btn btn-light mt-3 container w-50">Send</button>
      </form>
      <div  className="container-fluid d-flex justify-content-center"><p  className=" p-3 rounded-3 fs-5">{result}</p></div>
      </div>
    </section>
  );
}

