import styles from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.img} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        {link && (
          <a
            href={link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project &rarr;
          </a>
        )}
      </div>
    </div>
  );
}