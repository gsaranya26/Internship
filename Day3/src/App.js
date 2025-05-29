// src/App.js
import React from "react";
import Card from "./components/card";
import Counter from "./components/counter";
import Layout from "./components/layout";

function App() {
  return (
    <Layout
      header={<h1>Welcome to My App</h1>}
      body={
        <>
          <Card title="Hello!" content="This is a reusable Card component." />
          <Counter label="Click Counter" />
        </>
      }
      footer={<p>© 2025 Saranya</p>}
    />
  );
}

export default App;
