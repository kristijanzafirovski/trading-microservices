import React, { useEffect, useState } from 'react';

function App() {
  const [signals, setSignals] = useState([]);

  const fetchSignals = async () => {
    const res = await fetch('http://localhost:8082/signals');
    const data = await res.json();
    setSignals(data);
  };

  useEffect(() => {
    fetchSignals();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>Trading Signals</h1>
      <button onClick={fetchSignals}>Refresh</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 20 }}>
        {signals.map((s, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 16,
            margin: 10,
            width: 200,
            backgroundColor:
              s.action === 'BUY' ? '#d4f4dd' :
              s.action === 'SELL' ? '#f4d4d4' : '#f4f1d4'
          }}>
            <h3>{s.symbol}</h3>
            <p><strong>Action:</strong> {s.action}</p>
            <p><strong>Avg Close:</strong> {s.avgClose.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;