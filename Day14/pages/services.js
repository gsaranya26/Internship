import { promises as fs } from "fs";
import path from "path";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return { props: { services: data.services }, };
}

export default function Services({ services }) {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filtered = services.filter(service => service.name.toLowerCase().includes(search.toLowerCase()));

  // Spinner while loading
  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
        <div className="spinner" />
        <style jsx>{`
          .spinner {
            width: 48px;
            height: 48px;
            border: 6px solid #e0e7ef;
            border-top: 6px solid #2563eb;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <motion.div
      style={{ padding: "2rem 0", minHeight: "100vh" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      <div style={{ maxWidth: 380, margin: "0 auto 2rem" }}>
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: 8,
            border: "1.5px solid #c3cfe2",
            fontSize: 18,
            boxShadow: "0 2px 8px rgba(45, 77, 123, 0.05)",
            outline: "none",
            marginBottom: 6,
            transition: "border-color 0.2s"
          }}
        />
      </div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2.5rem",
          padding: 0,
          listStyle: "none",
          maxWidth: 1200,
          margin: "0 auto"
        }}
      >
        <AnimatePresence>
          {filtered.map((service, i) => (
            <motion.li
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.33, delay: i * 0.08 }}
            >
              <Link href={`/services/${service.id}`}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 32px 0 rgba(45, 77, 123, 0.15)",
                    borderColor: "#a1c9f7"
                  }}
                  style={{
                    border: "1.5px solid #e0e0e0",
                    borderRadius: 16,
                    padding: "2.2rem 1.2rem",
                    background: "rgba(255,255,255,0.55)",
                    cursor: "pointer",
                    minHeight: 230,
                    transition: "box-shadow 0.22s, transform 0.22s, border 0.22s"
                  }}
                >
                  <h2 style={{ fontSize: "1.25rem" }}>{service.name}</h2>
                  <p>{service.company.catchPhrase}</p>
                  <p>{service.email}</p>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
}