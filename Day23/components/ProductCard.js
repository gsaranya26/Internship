import styles from "./ProductCard.module.css";

export default function ProductCard({ title, description, image, category }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.img} />
      <div className={styles.body}>
        <div className={styles.category}>{category}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
}