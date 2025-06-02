// src/components/Layout.js
import React from "react";

function Layout({ header, body, footer }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <header>{header}</header>
      <main>{body}</main>
      <footer style={{ marginTop: "20px" }}>{footer}</footer>
    </div>
  );
}

export default Layout;
