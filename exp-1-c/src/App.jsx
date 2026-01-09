import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>Theme Toggle SPA</h1>
      <p>Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}</p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
