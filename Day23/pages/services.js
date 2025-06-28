import MainLayout from "../components/MainLayout";
import ServiceCard from "../components/ServiceCard";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <MainLayout>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Our Services</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.servicesGrid}>
          <ServiceCard
            title="Web Development"
            description="Modern, scalable web apps with React, Next.js, and Node."
            icon="💻"
          />
          <ServiceCard
            title="UI/UX Design"
            description="Beautiful, user-friendly interfaces designed for conversion."
            icon="🎨"
          />
          <ServiceCard
            title="E-Commerce"
            description="Robust, secure online stores built for growth."
            icon="🛒"
          />
          <ServiceCard
            title="Consulting"
            description="Expert advice and digital transformation for your business."
            icon="💡"
          />
          <ServiceCard
            title="Branding"
            description="Logo, identity, and messaging to make your brand memorable."
            icon="🏷️"
          />
          <ServiceCard
            title="SEO & Marketing"
            description="Grow your online presence and reach your audience."
            icon="🚀"
          />
        </div>
      </div>
    </MainLayout>
  );
}