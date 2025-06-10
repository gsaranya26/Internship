import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Optionally: send data to Formspree/Netlify or your own API here
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: 400,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: 24,
      borderRadius: 12,
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
    }}>
      <h2>Contact Us</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
      />
      {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
      />
      {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc", minHeight: 80 }}
      />
      {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
      <button type="submit" style={{
        padding: "10px 0", borderRadius: 6, background: "#3F51B5", color: "#fff", border: "none", fontWeight: "bold"
      }}>
        Send
      </button>
      {submitted && <div style={{ color: "green" }}>Message sent! Thank you.</div>}
    </form>
  );
}