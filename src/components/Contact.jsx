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

    setResult(`📨 Message sent from ${email}`);
    e.target.reset();
  };

  return (
    <section id="contact" className="text-center p-5">
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" className="form-control w-50 mx-auto my-3" />
        <textarea name="message" placeholder="Message" className="form-control w-50 mx-auto" />
        <button className="btn btn-light mt-3">Send</button>
      </form>
      <p className="mt-3">{result}</p>
    </section>
  );
}

