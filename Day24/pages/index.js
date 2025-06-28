import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Welcome to <span>Acme Web Solutions</span>
          </h1>
          <p>
            Build modern web apps quickly with Next.js and a professional look.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>Get Started</Link>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>💻</div>
            <h3>Web Development</h3>
            <p>Modern, scalable web apps built using the latest technologies.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful, user-friendly interfaces to delight your users.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>💡</div>
            <h3>Consulting</h3>
            <p>Expert guidance to take your project to the next level.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to get started?</h2>
        <p>
          Contact us today and let&apos;s build something great together!
        </p>
        <Link href="/contact" className={styles.ctaLink}>Contact Us</Link>
      </section>
    </div>
  );
}