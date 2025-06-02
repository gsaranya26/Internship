// src/components/Card.js
import React from "react";

function Card({ title, content }) {
  return (
    <div style={{ border: "1px solid gray", padding: "16px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;

