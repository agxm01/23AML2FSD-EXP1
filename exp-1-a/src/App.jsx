import React, { useState } from "react";

function App() {
  // useState hook to manage counter value
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Simple Counter SPA</h1>
      <h2>Count: {count}</h2>

      <div style={styles.buttons}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default App;
