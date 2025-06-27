import { useState } from "react";

export default function ApiTester() {
  const [apiUrl, setApiUrl] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!apiUrl) return;
    setLoading(true);
    setError("");
    setData(null);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <label>API URL:</label>
      <input
        value={apiUrl}
        onChange={e => setApiUrl(e.target.value)}
        style={{ margin: "0 10px", width: "300px" }}
      />
      <button onClick={handleFetch}>Fetch</button>
      {loading && <div>Loading...</div>}
      {error && <div style={{color: "red"}}>{error}</div>}
      {data && (
        <pre style={{background: "#eee", padding: 10, marginTop: 10, maxHeight: 300, overflow: "auto"}}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}