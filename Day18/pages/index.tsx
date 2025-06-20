import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { user, login, logout, theme, toggleTheme, cart, addToCart, clearCart } = useAppContext();

  return (
    <div
      style={{
        background: theme === "dark" ? "#18181c" : "#f5f5fa",
        color: theme === "dark" ? "#fff" : "#222",
        minHeight: "100vh",
        fontFamily: "system-ui, Arial, sans-serif",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: 480,
          margin: "60px auto",
          background: theme === "dark" ? "#23232b" : "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 12px #0001",
          padding: 32,
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 24 }}>🌐 Global State Demo</h1>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ margin: 0 }}>
            Theme: <span style={{ fontWeight: 400 }}>{theme}</span>
            <button
              onClick={toggleTheme}
              style={{
                marginLeft: 16,
                padding: "6px 18px",
                borderRadius: 6,
                border: "1px solid #888",
                background: "#efefef",
                cursor: "pointer",
              }}
            >
              Toggle Theme
            </button>
          </h2>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ margin: 0 }}>
            User:{" "}
            <span style={{ fontWeight: 400 }}>
              {user ? user.email : "Not logged in"}
            </span>
          </h2>
          {user ? (
            <div style={{ marginTop: 12 }}>
              <span style={{ color: "#16a34a", fontWeight: 600 }}>
                Welcome, {user.email.split("@")[0]}!
              </span>
              <button
                onClick={logout}
                style={{
                  marginLeft: 16,
                  padding: "6px 16px",
                  borderRadius: 6,
                  border: "1px solid #888",
                  background: "#fef2f2",
                  color: "#b91c1c",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => login({ email: "user@example.com" })}
              style={{
                marginTop: 12,
                padding: "6px 16px",
                borderRadius: 6,
                border: "1px solid #888",
                background: "#e0f2fe",
                color: "#2563eb",
                cursor: "pointer",
              }}
            >
              Login as Demo User
            </button>
          )}
        </section>

        <section>
          <h2 style={{ margin: 0 }}>
            Cart{" "}
            <span style={{ fontWeight: 400 }}>({cart.length} item{cart.length !== 1 ? "s" : ""})</span>
          </h2>
          <div style={{ margin: "14px 0" }}>
            <button
              onClick={() => addToCart({ id: cart.length + 1, name: `Item ${cart.length + 1}` })}
              style={{
                marginRight: 10,
                padding: "6px 16px",
                borderRadius: 6,
                border: "1px solid #888",
                background: "#fef9c3",
                color: "#a16207",
                cursor: "pointer",
              }}
            >
              Add Item
            </button>
            <button
              onClick={clearCart}
              disabled={cart.length === 0}
              style={{
                padding: "6px 16px",
                borderRadius: 6,
                border: "1px solid #888",
                background: cart.length === 0 ? "#eee" : "#fee2e2",
                color: "#b91c1c",
                cursor: cart.length === 0 ? "not-allowed" : "pointer",
              }}
            >
              Clear Cart
            </button>
          </div>
          <ul style={{ paddingLeft: 18 }}>
            {cart.length === 0 ? (
              <li style={{ color: "#888" }}>No items yet. Add some!</li>
            ) : (
              cart.map((item) => <li key={item.id}>{item.name}</li>)
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}