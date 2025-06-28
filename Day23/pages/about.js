import MainLayout from "../components/MainLayout";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <MainLayout>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>About Us</h1>
      </div>
      <div className={styles.container}>
        <section className={styles.intro}>
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
            alt="Company"
            className={styles.introImg}
          />
          <div>
            <h2>Who We Are</h2>
            <p>
              Acme Web Solutions is a forward-thinking web agency helping businesses launch, grow, and succeed online. With a team of passionate developers, designers, and strategists, we deliver modern solutions using cutting-edge technology and creative thinking.
            </p>
            <p>
              Our mission is to empower brands with impactful digital experiences and long-term partnerships.
            </p>
          </div>
        </section>

        <section className={styles.timelineSec}>
          <h2>Our Journey</h2>
          <ul className={styles.timeline}>
            <li>
              <span>2020</span>
              <div>
                <strong>Founded</strong>
                <p>Acme Web Solutions was founded with a vision to make web excellence accessible for all.</p>
              </div>
            </li>
            <li>
              <span>2021</span>
              <div>
                <strong>First 100 Clients</strong>
                <p>We celebrated our first 100 happy clients and expanded our team.</p>
              </div>
            </li>
            <li>
              <span>2022</span>
              <div>
                <strong>Global Projects</strong>
                <p>Worked on projects across three continents and multiple industries.</p>
              </div>
            </li>
            <li>
              <span>2023</span>
              <div>
                <strong>Innovation Award</strong>
                <p>Received an industry award for our innovative digital platforms.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </MainLayout>
  );
}