import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 2500);
      // Optionally: send data to an API here
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ padding: 20, maxWidth: 400, margin: "0 auto" }}
    >
      <h1>Contact Us</h1>
      <p>
        Email: info@yourcompany.com<br />
        Phone: (123) 456-7890
      </p>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginBottom: 4 }}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginBottom: 4 }}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label>Message:</label><br />
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginBottom: 4 }}
          />
          {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Send</button>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{ color: "green", marginTop: 10 }}
          >
            Message sent! Thank you.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}