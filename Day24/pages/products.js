import MainLayout from "../components/MainLayout";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Products.module.css";

const products = [
  {
    title: "Business Website",
    description: "A modern, responsive business site to showcase your company online.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "Website",
  },
  {
    title: "E-Commerce Platform",
    description: "Complete online store with cart, payments, and product management.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    category: "E-Commerce",
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio for professionals, freelancers, and creatives.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80",
    category: "Portfolio",
  },
  {
    title: "Booking App",
    description: "Custom booking and reservation tools for service businesses.",
    image: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=600&q=80",
    category: "App",
  },
  {
    title: "Blog Platform",
    description: "SEO-friendly blog systems with categories, tags, and comments.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    category: "Content",
  },
  {
    title: "Custom Dashboard",
    description: "Admin dashboards with analytics, charts, user management, and more.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    category: "Dashboard",
  },
];

export default function Products() {
  return (
    <MainLayout>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Our Products</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}