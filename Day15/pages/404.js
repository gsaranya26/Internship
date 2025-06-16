import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#f7faff"
      }}
    >
      <h1 style={{ fontSize: 90, fontWeight: 800, color: "#2563eb", marginBottom: 0 }}>404</h1>
      <p style={{ fontSize: 24, color: "#233a5b", marginBottom: 28 }}>
        Oops! Page not found.
      </p>
      <Link href="/">
        <button
          style={{
            padding: "12px 34px",
            borderRadius: 8,
            background: "#2563eb",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(45, 77, 123, 0.07)"
          }}
        >
          Go Home
        </button>
      </Link>
    </motion.main>
  );
}