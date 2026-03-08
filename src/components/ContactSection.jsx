import { useState } from "react";

function SplitTitle({ text }) {
  return (
    <h2 className="section-title">
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>{word}&nbsp;</span>
      ))}
    </h2>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  /* ---------------- HANDLE INPUT ---------------- */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ---------------- HANDLE SUBMIT ---------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponseMsg(null);
    setErrorMsg(null);

    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill required fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://contact-sheet.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setResponseMsg("We will be Connecting soon!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-block contact-layout" id="contact" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Get in touch</p>
        <SplitTitle text="Let's build something impactful together." />
      </div>

      <div className="contact-grid">
        <div className="contact-card glass-card">
          <p className="label">Email</p>
          <a href="mailto:vivekpnd4321@gmail.com">vivekpnd4321@gmail.com</a>
          <p className="muted-copy">
            Best way to reach me for job opportunities or project discussions.
          </p>
        </div>

        <div className="contact-card glass-card">
          <p className="label">Phone / WhatsApp</p>
          <a href="tel:+918287356303">+91 82873 56303</a>
          <p className="muted-copy">
            Available for quick conversations regarding projects or interviews.
          </p>
        </div>

        <div className="contact-card glass-card">
          <p className="label">Location</p>
          <span>Delhi, India • Remote Friendly</span>
          <p className="muted-copy">
            Open to full-time roles, freelance projects and remote collaborations.
          </p>
        </div>
      </div>

      <div className="contact-form glass-card">
        <div className="form-intro">
          <h3>Send a message</h3>
          <p>
            If you have a project, collaboration or job opportunity in web or
            mobile development, feel free to reach out.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-grid">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Job opportunity, project inquiry..."
              value={form.subject}
              onChange={handleChange}
            />
          </label>

          <label>
            Message
            <textarea
              rows="5"
              name="message"
              placeholder="Tell me about the project, role or collaboration."
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>


          {responseMsg && (
            <p style={{ color: "#38d39f", marginBottom: "10px" }}>
              {responseMsg}
            </p>
          )}

          {errorMsg && (
            <p style={{ color: "#ff6b6b", marginBottom: "10px" }}>
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-solid full-width"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}