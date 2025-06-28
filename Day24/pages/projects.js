import MainLayout from "../components/MainLayout";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Acme Store",
    description: "Full-featured e-commerce platform with payments, admin, and reviews.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Portfolio for Jane Doe",
    description: "Personal portfolio for a designer with blog, gallery, and contact.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Startup Dashboard",
    description: "Analytics dashboard for a SaaS startup with real-time charts.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Booking Pro",
    description: "Reservation system for salons and small businesses.",
    image: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Tech Blog",
    description: "Custom CMS and blog platform for a technology company.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
];

export default function Projects() {
  return (
    <MainLayout>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Our Projects</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}