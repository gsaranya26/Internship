import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import OptimizedImage from "../components/OptimizedImage";
import Cart from "../components/Cart";

// Dynamically import a heavy component (for demonstration)
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  loading: () => <p>Loading…</p>,
  ssr: false,
});

export default function Home() {
  const [cart, setCart] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ]);
  const [showHeavy, setShowHeavy] = useState(false);

  const handleRemove = useCallback(
    (id: number) => setCart((cart) => cart.filter((item) => item.id !== id)),
    []
  );

  const handleAdd = useCallback(() => {
    setCart((cart) => [
      ...cart,
      { id: cart.length + 1, name: `Item ${cart.length + 1}` },
    ]);
  }, []);

  const handleClear = useCallback(() => setCart([]), []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "0",
        margin: "0",
      }}
    >
      <div
        style={{
          maxWidth: 520,
          margin: "48px auto",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 8px 32px rgba(100, 116, 139, 0.13)",
          padding: "40px 28px 32px 28px",
        }}
      >
        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            marginBottom: 10,
            color: "#1e293b",
            textAlign: "center",
            letterSpacing: "-1.5px",
          }}
        >
          🚀 Performance Optimization Demo
        </h1>
        <div style={{ marginBottom: 30 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: 17,
              marginBottom: 2,
              color: "#0f172a",
            }}
          >
            <span style={{ color: "#06b6d4" }}>Image Optimization</span>
          </div>
          <div style={{ fontSize: 15, color: "#475569", marginBottom: 16 }}>
            The image below uses Next.js <code>next/image</code> for responsiveness and lazy loading.
          </div>
          <div
            style={{
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 4px 24px #bae6fd66",
              marginBottom: 10,
              width: "100%",
              maxWidth: 420,
              margin: "0 auto 18px auto",
              background: "#f1f5f9",
            }}
          >
            <OptimizedImage
              src="/sample.jpeg"
              alt="Sample"
              width={420}
              height={240}
            />
          </div>
        </div>

        <div style={{ marginBottom: 36 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: 17,
              marginBottom: 7,
              color: "#0f172a",
            }}
          >
            <span style={{ color: "#6366f1" }}>Dynamic Import</span>
          </div>
          <button
            onClick={() => setShowHeavy((s) => !s)}
            style={{
              padding: "12px 28px",
              fontSize: "1.05rem",
              borderRadius: 8,
              background: "#f1f5f9",
              color: "#334155",
              border: "1px solid #cbd5e1",
              boxShadow: "0 2px 6px #cbd5e166",
              cursor: "pointer",
              fontWeight: 600,
              outline: "none",
              transition: "background 0.2s",
            }}
          >
            {showHeavy ? "Hide" : "Show"} Heavy Component
          </button>
          {showHeavy && (
            <div style={{ marginTop: 18 }}>
              <HeavyComponent />
            </div>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: 17,
              marginBottom: 7,
              color: "#0f172a",
            }}
          >
            <span style={{ color: "#22c55e" }}>Cart (React.memo &amp; useCallback)</span>
          </div>
          <div style={{ display: "flex", gap: 14, marginBottom: 12 }}>
            <button
              onClick={handleAdd}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                background: "#facc15",
                color: "#5b3709",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 1px 4px #fde68a44",
                transition: "background 0.2s",
              }}
            >
              Add Item
            </button>
            <button
              onClick={handleClear}
              disabled={cart.length === 0}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                background: cart.length === 0 ? "#f1f5f9" : "#f87171",
                color: cart.length === 0 ? "#a3a3a3" : "#fff",
                fontWeight: 700,
                fontSize: 15,
                cursor: cart.length === 0 ? "not-allowed" : "pointer",
                boxShadow: "0 1px 4px #fca5a544",
                transition: "background 0.2s",
              }}
            >
              Clear Cart
            </button>
          </div>
          <Cart items={cart} onRemove={handleRemove} />
        </div>
      </div>
    </div>
  );
}