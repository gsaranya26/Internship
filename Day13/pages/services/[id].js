import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  const paths = data.services.map((service) => ({
    params: { id: service.id.toString() }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  const service = data.services.find((s) => s.id.toString() === params.id);
  return { props: { service } };
}

export default function ServiceDetail({ service }) {
  return (
    <main style={{
      minHeight: "100vh",
      background: "none",
      padding: "48px 0"
    }}>
      <div style={{
        maxWidth: 600,
        margin: "48px auto",
        background: "#fff",
        borderRadius: 24,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        padding: 40,
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: 38, fontWeight: "bold", color: "#2563eb", marginBottom: 30 }}>
          {service.name}
        </h1>
        {service.company?.name && (
          <p style={{ color: "#222", marginBottom: 14, fontSize: 19 }}>
            <span style={{ fontWeight: "bold" }}>Company:</span> {service.company.name}
          </p>
        )}
        {service.company?.catchPhrase && (
          <p style={{ color: "#222", marginBottom: 14, fontSize: 18 }}>
            <span style={{ fontWeight: "bold" }}>Service Description:</span> {service.company.catchPhrase}
          </p>
        )}
        {service.company?.bs && (
          <p style={{ color: "#222", marginBottom: 14, fontSize: 18 }}>
            <span style={{ fontWeight: "bold" }}>Business Specialty:</span> {service.company.bs}
          </p>
        )}
        <p style={{ color: "#222", marginBottom: 32, fontSize: 18 }}>
          <span style={{ fontWeight: "bold" }}>Contact Email:</span> {service.email}
        </p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          <button
            style={{
              padding: "10px 32px",
              borderRadius: 8,
              background: "#f1f5f9",
              color: "#222",
              fontWeight: "bold",
              border: "none",
              fontSize: 18,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <Link href="/">
            <button
              style={{
                padding: "10px 32px",
                borderRadius: 8,
                background: "#2563eb",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
              }}
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}