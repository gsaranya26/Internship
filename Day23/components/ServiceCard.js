import React from "react";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}