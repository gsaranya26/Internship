import { useState } from "react";
import MainLayout from "../components/MainLayout";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would normally send the data to an API or service
  }

  return (
    <MainLayout>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Contact Us</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Get in Touch</h2>
          <p>
            Have a project in mind or want to work with us? Fill out the form and our team will get back to you soon!
          </p>
          <ul>
            <li>Email: <a href="mailto:info@acmeweb.com">info@acmeweb.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+1 234 567 890</a></li>
            <li>Location: Chennai, India</li>
          </ul>
        </div>
        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.successMsg}>
              <h3>Thank you!</h3>
              <p>Your message has been sent. We'll get in touch soon.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <button type="submit" className={styles.button}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
}