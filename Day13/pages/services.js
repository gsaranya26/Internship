import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { useState } from "react";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return {
    props: { services: data.services },
  };
}

export default function Services({ services }) {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(null);

  // Filter services by name, company, or email (case-insensitive)
  const filtered = services.filter(service => {
    const q = search.toLowerCase();
    return (
      service.name.toLowerCase().includes(q) ||
      (service.company?.catchPhrase?.toLowerCase() || "").includes(q) ||
      (service.email?.toLowerCase() || "").includes(q)
    );
  });

  const emojis = ["💡", "💻", "🚀", "📊", "📱", "🔒", "🌍", "⚡", "🛠", "🗂️", "🛡️", "📈"];

  return (
    <div style={{ padding: "2rem 0", minHeight: "100vh" }}>
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "700",
          marginBottom: "2.5rem",
          color: "#21325e",
          textAlign: "center",
          letterSpacing: ".03em"
        }}
      >
        Our Services
      </h1>
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
      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888", fontSize: 20, marginTop: 60 }}>
          No services found.
        </p>
      ) : (
        <ul
          className="services-grid"
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
          {filtered.map((service, i) => (
            <li
              key={service.id}
              className="service-card"
              style={{ width: "100%" }}
            >
              <Link href={`/services/${service.id}`}>
                <div
                  style={{
                    borderRadius: "16px",
                    border: "1.5px solid #e0e0e0",
                    padding: "2.2rem 1.2rem",
                    cursor: "pointer",
                    minHeight: 230,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow:
                      hovered === service.id
                        ? "0 8px 32px 0 rgba(45, 77, 123, 0.10)"
                        : "0 2px 8px 0 rgba(45, 77, 123, 0.03)",
                    background: "rgba(255,255,255,0.55)",
                    transition: "box-shadow 0.22s, transform 0.22s, border 0.22s",
                    color: "#1a2236",
                    textDecoration: "none",
                    outline: hovered === service.id ? "2px solid #a1c9f7" : "none",
                    transform: hovered === service.id
                      ? "translateY(-6px) scale(1.025)"
                      : "none",
                    userSelect: "none"
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${service.name}`}
                  onMouseOver={() => setHovered(service.id)}
                  onMouseOut={() => setHovered(null)}
                  onFocus={() => setHovered(service.id)}
                  onBlur={() => setHovered(null)}
                  onMouseDown={e => e.currentTarget.style.textDecoration = "none"}
                  onMouseUp={e => e.currentTarget.style.textDecoration = "none"}
                >
                  <div style={{ fontSize: 44, marginBottom: 20 }}>
                    {emojis[i % emojis.length]}
                  </div>
                  <h2 style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#233a5b",
                    margin: "0 0 8px 0",
                    textAlign: "center"
                  }}>
                    {service.name}
                  </h2>
                  <p style={{
                    color: "#3066be",
                    margin: "0 0 10px 0",
                    fontSize: "1.05rem",
                    textAlign: "center"
                  }}>
                    {service.company.catchPhrase}
                  </p>
                  <p style={{
                    fontSize: 13,
                    color: "#727272",
                    textAlign: "center"
                  }}>
                    {service.email}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}