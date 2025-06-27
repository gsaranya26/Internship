import React from "react";

interface Item {
  id: number;
  name: string;
}
interface CartProps {
  items: Item[];
  onRemove: (id: number) => void;
}

const Cart: React.FC<CartProps> = React.memo(({ items, onRemove }) => (
  <div style={{ marginTop: 10 }}>
    <div
      style={{
        fontWeight: 700,
        fontSize: 20,
        color: "#2563eb",
        marginBottom: 3,
      }}
    >
      Cart <span style={{ fontWeight: 500 }}>({items.length})</span>
    </div>
    <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
      {items.length === 0 ? (
        <li style={{ color: "#94a3b8" }}>No items yet. Add some!</li>
      ) : (
        items.map((item) => (
          <li key={item.id} style={{ margin: "8px 0", display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: 10 }}>{item.name}</span>
            <button
              onClick={() => onRemove(item.id)}
              style={{
                padding: "5px 14px",
                borderRadius: 6,
                border: "none",
                background: "#fde047",
                color: "#78350f",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                marginLeft: 6,
                boxShadow: "0 1px 2px #fef08a44",
                transition: "background 0.2s",
              }}
            >
              Remove
            </button>
          </li>
        ))
      )}
    </ul>
  </div>
));

export default Cart;