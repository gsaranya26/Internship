// src/components/Counter.js
import React, { useState } from "react";

function Counter({ label }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{label}</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
