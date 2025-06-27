// Simulate a heavy component
export default function HeavyComponent() {
  return (
    <div style={{
      padding: 24,
      background: "#e0f7fa",
      marginTop: 24,
      borderRadius: 8,
      textAlign: "center",
      fontWeight: 600,
      fontSize: "1.2rem"
    }}>
      <span role="img" aria-label="rocket">🚀</span> This is a heavy component loaded dynamically!
    </div>
  );
}