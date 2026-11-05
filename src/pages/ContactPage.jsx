import { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-intro">
        <h1>
          Get in <span className="accent">Touch</span>
        </h1>
        <p>
          I'm always open to discussing new projects, creative ideas, or
          collaborations. Feel free to reach out directly!
        </p>
      </section>

      <div className="projects-grid" style={{ marginBottom: "2.5rem" }}>
        <div className="project-card">
          <div className="project-icon">✉️</div>
          <h3>Email</h3>
          <p>Drop me a message directly in my inbox anytime.</p>
          <a href="mailto:Rik@gmail.com" className="work-link">
            Rik@gmail.com
          </a>
        </div>

        <div className="project-card">
          <div className="project-icon">📞</div>
          <h3>Phone</h3>
          <p>Give me a call or text for immediate inquiries.</p>
          <a href="tel:1234567890" className="work-link">
            1234567890
          </a>
        </div>
      </div>

      <div
        className="project-card"
        style={{ maxWidth: "600px", margin: "0 auto 2.5rem", padding: "2.25rem" }}
      >
        <h3 style={{ marginBottom: "1rem" }}>Send a Direct Message</h3>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "1.5rem" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🎉</div>
            <h4 style={{ color: "#ffffff", marginBottom: "0.5rem" }}>
              Thank you, {formData.name}!
            </h4>
            <p style={{ color: "#94a3b8" }}>
              Your message has been received. I'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <div>
              <label htmlFor="name" className="contact-label">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="contact-input"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="contact-label">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="contact-input"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="contact-label">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="contact-input"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link to="/" className="back-link">
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;

